'user strict'

// modules
const express = require('express')
const api = express.Router()
const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/slider' })

// controllers
const uploadImg    = require('../controllers/image/upload_image')
const getImageFile = require('../controllers/image/get_image')
const saveSlider   = require('../controllers/slider/save_slider')
const getSlider    = require('../controllers/slider/get_slider')
const deleteSlide  = require('../controllers/slider/delete_slider')
const update       = require('../controllers/update/update')

// models
const Slider = require('../models/slider')

// middlewares
const ensureAuth = require('../middlewares/authenticated')
const isAdmin    = require('../middlewares/is_admin')

api.post('/save-slider', [ensureAuth, isAdmin, mdUpload], saveSlider )
api.post('/upload-slider-image/:id', [ensureAuth, isAdmin, mdUpload], uploadImg.bind(null, Slider) )

api.put('/update-slider/:id', [ensureAuth, isAdmin], update.bind(null, Slider) )

api.get('/image-slider/:imageFile', getImageFile.bind(null, 'slider') )
api.get('/slider', getSlider )

api.delete('/delete-slider/:id', [ensureAuth, isAdmin], deleteSlide )


module.exports = api