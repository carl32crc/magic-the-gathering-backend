'user strict'

const express = require('express')
const api = express.Router()

// controllers
const saveUser = require('../controllers/users/save_user')
const login = require('../controllers/users/login')
const uploadImg = require('../controllers/users/upload_image')
const getImageFile = require('../controllers/users/get_image')
const getAllUsers = require('../controllers/users/get_all_users')
const deleteUser = require('../controllers/users/delete_user')
const updateUser = require('../controllers/users/update_user')

const ensureAuth = require('../middlewares/authenticated')
const isAdmin = require('../middlewares/is_admin')

const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/users' })

api.post('/register', saveUser )
api.post('/login', login )
api.post('/upload-image/:id', [ensureAuth, mdUpload], uploadImg )

api.put('/update-user/:id', ensureAuth, updateUser )

api.get('/image/:imageFile', [ensureAuth], getImageFile )
api.get('/get-all-users', [ensureAuth, isAdmin], getAllUsers )

api.delete('/delete/:id', [ensureAuth, isAdmin], deleteUser )

module.exports = api