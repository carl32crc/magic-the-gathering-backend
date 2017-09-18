'use strict'

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;

const deck = require('./decks')

const articleSchema = Schema({
    title: String,
    subtitle: String,
    summary: String,
    author: String,
    content: String,
    image: { type: String, default: null},
    creationDate: { type: Date, default: Date() },
    isDelete: { type: Boolean, default: false },
    deck: deck,
    user: { type: Schema.ObjectId, ref: 'User' }
})
articleSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Article', articleSchema)