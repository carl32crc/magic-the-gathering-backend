'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const slider = Schema({
    title: String,
    subtitle: String,
    date: { type: Date, default: null },
    image: String 
})

module.exports = mongoose.model('Slider', slider)