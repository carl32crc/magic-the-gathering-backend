'use strict'

// models
const Slider = require('../../models/slider')

const fs = require('fs')

const deleteSlide = (req, res) => {

    const id = req.params.id

    Slider.findByIdAndRemove(id, (err, slide) => {  

        if ( slide.image ) {
            fs.unlink( 'uploads\\slider\\' + slide.image , (err) => {})
        }
  
        let response = {
            message: 'Slide successfully deleted',
            slide: slide
        }
        
        res.status(200).send(response);
    });

}

module.exports = deleteSlide