'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cmc = Schema({
    cmc: Number,
    number: Number
})

module.exports = cmc