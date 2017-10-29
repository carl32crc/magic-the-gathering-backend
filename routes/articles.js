'user strict'

// modules
const express = require('express')
const api = express.Router()
const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/articles' })

// controllers
const uploadImg    = require('../controllers/image/upload_image')
const getImageFile = require('../controllers/image/get_image')

const update = require('../controllers/update/update')

const getAllArticles = require('../controllers/articles/get_all_articles')
const saveArticle    = require('../controllers/articles/save_article')
const getArticle     = require('../controllers/articles/get_article')
const getMyArticles  = require('../controllers/articles/get_my_articles')
const deleteArticle  = require('../controllers/articles/delete_article')

// models
const Article = require('../models/articles')

// middlewares
const ensureAuth = require('../middlewares/authenticated')

api.post('/save-article', ensureAuth, saveArticle )
api.post('/upload-article-image/:id', [ensureAuth, mdUpload], uploadImg.bind(null, Article) )

api.put('/update-article/:id', ensureAuth, update.bind(null, Article) )

api.get('/image-article/:imageFile', getImageFile.bind(null, 'articles') )
api.get('/all-articles', getAllArticles )
api.get('/article/:id', getArticle )
api.get('/my-articles/:id', ensureAuth, getMyArticles )

api.delete('/delete-article/:id', ensureAuth, deleteArticle)

module.exports = api