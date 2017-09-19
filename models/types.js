'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Types = Schema({
    type: String,
    number: Number
})

module.exports = Types