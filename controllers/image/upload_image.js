'use strict'

// modules
const fs = require('fs')

const uploadImg = (model, req, res) => {
    
    const id = req.params.id
    
        if ( req.files.image ) {
            const image = req.files.image
            const filePath = req.files.image.path
            const fileName = filePath.split('\\')[2]
            const extensionImage = fileName.split('\.')[1]
    
            if ( extensionImage === 'png' || extensionImage === 'PNG' || 
                 extensionImage === 'jpg' || extensionImage === 'JPG' ||
                 extensionImage === 'jpeg' || extensionImage === 'JPEG') {
    
                if (id !== req.user.sub && filePath.split('\\')[1] === 'users') {
                    return res.status(403).send({ message: 'No tienes permisos' })
                }
    
                model.findById(id, (err, data) => {
                    
                    if ( data.image ) {
                        fs.unlink( `uploads\\${filePath.split('\\')[1]}\\` + data.image , (err) => {})
                    }
                    
                })
            
                model.findByIdAndUpdate(id, { image: fileName }, {new:true}, (err, updated) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al actualizar usuario' })
                    } else {
                        if(!updated) {
                            res.status(404).send({ message: 'No se ha podido actualizar el usuario' })
                        } else {
                            res.status(200).send({ image: fileName})
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