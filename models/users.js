'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    creationDate: String,
    image: String,
    role: String
})

module.exports = mongoose.model('User', userSchema)