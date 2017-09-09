'use strict'

// modules
const fs = require('fs')
const path = require('path')

// models
const User = require('../models/user')

const getImageFile = (req, res) => { 
    const imageFile = req.params.imageFile
    const pathFile = `./uploads/users/${imageFile}`

    fs.exists(pathFile, (exists)=> {
        if ( exists ) {
            res.sendFile(path.resolve(pathFile))
        } else {
            res.status(404).send({ message: 'La imagen no existe' })
        }
    })
}

module.exports = getImageFile