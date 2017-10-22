'use strict'

// models
const Slider = require('../../models/slider')

const getSlider = (req, res) => {

    Slider.find({}, (err, slide) => {

        res.status(200).send({
            slide: slide
        })

    })
}

module.exports = getSlider