'use strict'

// modules
const bcrypt = require('bcrypt-nodejs')

// models
const Slider = require('../../models/slider')

// modules
const fs = require('fs')

const saveSlider = (req, res) => {

    const params = req.body

    if ( params.title && params.subtitle ) {
        
        const slider = new Slider( params )

        if ( req.files.image ) {
            const image = req.files.image
            const filePath = req.files.image.path
            const fileName = filePath.split('\\')[2]
            const extensionImage = fileName.split('\.')[1]

            if ( extensionImage === 'png' || extensionImage === 'PNG' || 
                 extensionImage === 'jpg' || extensionImage === 'JPG' ||
                 extensionImage === 'jpeg' || extensionImage === 'JPEG') {

                slider.image = fileName

                Slider.find({}, (err, slide) => {

                    console.log(slide.length)

                    if (slide.length <= 4) {

                        slider.save((err, sliderStored) => {
                            
                            if (err) {
                                res.status(500).send({ message: 'Error al guardar' })
                            } else {
                                if( !sliderStored ) {
                                    res.status(404).send({ message: 'El slider no se ha guardado bien' })
                                } else {
                                    res.status(200).send({ 
                                        message: 'El slider se ha guardado correctamente', 
                                        slider: sliderStored 
                                    })
                                }
                            }
                        })


                    } else {
                        
                        res.status(200).send({
                            message: 'No puedes introducir más de 5 elementos en el Carrousel.'
                        })

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
        }
    }
}

module.exports = saveSlider