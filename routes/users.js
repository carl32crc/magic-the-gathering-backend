'user strict'

//modules
const express = require('express')
const api = express.Router()
const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/users' })

// controllers
const saveUser = require('../controllers/users/save_user')
const login = require('../controllers/users/login')
const getAllUsers = require('../controllers/users/get_all_users')
const deleteUser = require('../controllers/users/delete_user')
const updateUser = require('../controllers/users/update_user')
const uploadImg = require('../controllers/image/upload_image')
const getImageFile = require('../controllers/image/get_image')

// models
const User = require('../models/users')

// middlewares
const ensureAuth = require('../middlewares/authenticated')
const isAdmin = require('../middlewares/is_admin')

api.post('/register', saveUser )
api.post('/login', login )
api.post('/upload-user-image/:id', [ensureAuth, mdUpload], uploadImg.bind(null, User) )
api.put('/update-user/:id', ensureAuth, updateUser )

api.get('/image-user/:imageFile', ensureAuth, getImageFile.bind(null, 'users') )
api.get('/get-all-users', [ensureAuth, isAdmin], getAllUsers )

api.delete('/delete/:id', [ensureAuth, isAdmin], deleteUser )

module.exports = api