'user strict'

const express = require('express')
const api = express.Router()

const saveArticle = require('../controllers/articles/save_article')

const ensureAuth = require('../middlewares/authenticated')

const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/article' })

api.post('/save-article', saveArticle )

module.exports = api