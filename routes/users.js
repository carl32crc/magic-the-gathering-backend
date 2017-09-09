'user strict'

const express = require('express')

// controllers
const saveUser = require('../controllers/users/save_user')
const login = require('../controllers/users/login')

const api = express.Router()
const mdAuth = require('../middlewares/authenticated')

const multiparty = require('connect-multiparty')
const mdUpload = multiparty({ uploadDir: './uploads/users' })

api.post('/register', saveUser )
api.post('/login', login )

module.exports = api