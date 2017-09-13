'use strict'

// modules
const fs = require('fs')
const path = require('path')

// models
const User = require('../../models/users')

const getImageFile = (folder, req, res) => { 
    const imageFile = req.params.imageFile
    const pathFile = `./uploads/${folder}/${imageFile}`

    fs.exists(pathFile, (exists)=> {
        if ( exists ) {
            res.sendFile(path.resolve(pathFile))
        } else {
            res.status(404).send({ message: 'La imagen no existe' })
        }
    })
}

module.exports = getImageFile