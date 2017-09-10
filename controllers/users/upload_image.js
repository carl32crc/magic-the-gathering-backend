'use strict'

// modules
const fs = require('fs')
const path = require('path')

// models
const User = require('../../models/users')

const uploadImg = (req, res) => {
    const userId = req.params.id
    const fileName = 'No subido...'

    if ( req.files ) {
        const image = req.files.image
        const filePath = req.files.image.path
        const fileName = filePath.split('\\')[2]
        const extensionImage = fileName.split('\.')[1]

        if ( extensionImage === 'png' || extensionImage === 'PNG' || 
             extensionImage === 'jpg' || extensionImage === 'JPG' ||
             extensionImage === 'jpeg' || extensionImage === 'JPEG') {

            if (userId != req.user.sub) {
                return res.status(500).send({ message: 'No tienes permisos' })
            }

            User.findById(userId, (err, user)=>{

                if ( user.image ) {
                    fs.unlink( 'uploads\\users\\' + user.image , (err) => {})
                }
                
            })
        
            User.findByIdAndUpdate(userId, { image: fileName }, {new:true}, (err, userUpdated) => {
                if (err) {
                    res.status(500).send({ message: 'Error al actualizar usuario' })
                } else {
                    if(!userUpdated) {
                        res.status(404).send({ message: 'No se ha podido actualizar el usuario' })
                    } else {
                        res.status(200).send({ user: userUpdated , image: fileName})
                    }
                }
            })

        
        } else {

            fs.unlink(filePath, (err) => {
                if (err) {
                    res.status(200).send({ message: 'La extensión no es valida tiene que ser .jpg, .png o .jpeg y fichero no borrado' })
                } else {
                    res.status(200).send({ message: 'La extensión no es valida tiene que ser .jpg, .png o .jpeg' })
                }
            })

        }

    } else {
        res.status(200).send({ message: 'No se ha subido ningún fichero' })
    }
}

module.exports = uploadImg