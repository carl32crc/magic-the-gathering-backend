'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Color = Schema({
    color: String,
    number: Number
})

module.exports = Color