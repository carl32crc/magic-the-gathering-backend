'use strict'

// modules
const bcrypt = require('bcrypt-nodejs')

// models
const User = require('../../models/users')

// services
const jwt = require('../../services/jwt')

const login = (req, res) => {
    
    const params = req.body
    const email = params.email
    const password = params.password

    User.findOne({ email: email }, (err, isSetUser) => {
        
        if (err) {
            res.status(500).send({ message: 'Error en la comprobación de si el usuario existe' })
        } else {

            if ( isSetUser ) {

                bcrypt.compare(password, isSetUser.password, (err, check)=>{
                    if (check) {
                        // comprobar y generar token
                        if ( params.getToken ) {
                            res.status(200).send({ 
                                token: jwt(isSetUser)
                                })
                        } else {
                            res.status(200).send({ isSetUser })
                        }

                    } else {
                        res.status(404).send({ message: 'Has introducido mal algun campo o el usuario no existe 2' })
                    }
                })

            } else {
                res.status(404).send({ message: 'Has introducido mal algun campo o el usuario no existe' })
            }
        }
    })
}

module.exports = login