'use strict'

// modules
const bcrypt = require('bcrypt-nodejs')

// models
const User = require('../../models/users')

const saveUser = (req, res) => {

    const params = req.body

    User.findOne({ email: params.email }, (err, isSetUser) => {

        if (err) {
            res.status(500).send({ message: 'Error en la comprobación de si el usuario existe' })
        } else {

            if ( !isSetUser ) {

                if ( params.password && params.name && params.surname && params.email ) {

                    const user = new User()
                    
                    user.name = params.name
                    user.surname = params.surname
                    user.email = params.email
                    user.creationDate = Date()
                    user.role = 'ROLE_USER'
                    user.image = null

                    bcrypt.hash(params.password, null, null, (err, hash) => {
                        
                        user.password = hash;
            
                        user.save((err, userStored) => {
                            if (err) {
                                res.status(500).send({ message: 'Error al guardar' })
                            } else {
                                if( !userStored ) {
                                    res.status(404).send({ message: 'No se ha registrado el usuario' })
                                } else {
                                    res.status(200).send({ message: 'El usuario se ha registrado correctamente', user: user })
                                }
                            }
                        })
                    })
            
                } else {
                    res.status(200).send({ message: 'Introduce los datos correctamente' })
                }

            } else {
                res.status(200).send({ message: 'Esta cuenta de Email ya está registrada' })
            }
        } 
    })
}

module.exports = saveUser