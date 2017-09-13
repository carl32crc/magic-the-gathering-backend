'user strict'

// modules
const express = require('express')
const api = express.Router()
const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/articles' })

// controllers
const saveArticle = require('../controllers/articles/save_article')
const uploadImg = require('../controllers/image/upload_image')
const getImageFile = require('../controllers/image/get_image')

// models
const Article = require('../models/articles')

// middlewares
const ensureAuth = require('../middlewares/authenticated')

api.post('/save-article', saveArticle )
api.post('/upload-article-image/:id', [ensureAuth, mdUpload], uploadImg.bind(null, Article) )
api.get('/image-article/:imageFile', ensureAuth, getImageFile.bind(null, 'articles') )

module.exports = api