'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// models
const color = require('./color')

const DecksSchema = Schema({
    title: String,
    subtitle: String,
    format: String,
    colors: [color],
    cards: String,
    sideboard: String,
    author: String,
    creationDate: { type: Date, default: Date() },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('Deck', DecksSchema)