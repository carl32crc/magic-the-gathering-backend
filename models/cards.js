'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// models
const color = require('./color')
const legalities = require('./legalities')

const Cards = Schema({
    name: String,
    colors: [color],
    number: Number,
    magic_id: String,
    image_url: String,
    cmc: Number,
    type: String,
    legalities: [legalities]
})

module.exports = Cards