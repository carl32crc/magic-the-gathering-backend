'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = Schema({
    title: String,
    subtitle: String,
    summary: String,
    author: String,
    content: String,
    image: { type: String, default: null},
    creationDate: { type: Date, default: Date() },
    isDelete: { type: Boolean, default: false }
})

module.exports = mongoose.model('Article', articleSchema)