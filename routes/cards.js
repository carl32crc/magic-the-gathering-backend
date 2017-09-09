'user strict'

const express = require('express')
const cardName = require('../controllers/cards/cards')

const api = express.Router()

api.get('/card/:name', cardName )

module.exports = api