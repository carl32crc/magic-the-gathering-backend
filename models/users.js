'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    creationDate: { type: Date, default: Date() },
    image: { type: String, default: null},
    role: { type: String, default: 'ROLE_USER'},
})

module.exports = mongoose.model('User', userSchema)