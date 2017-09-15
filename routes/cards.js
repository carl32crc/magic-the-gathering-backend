'user strict'

const express = require('express')
const api = express.Router()

const cardName = require('../controllers/cards/cards')


api.get('/card/:name', cardName )

module.exports = api