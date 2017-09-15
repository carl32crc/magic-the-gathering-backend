'user strict'

const express = require('express')
const api = express.Router()

// controllers
const saveDeck = require('../controllers/decks/save_deck')

// middlewares
const ensureAuth = require('../middlewares/authenticated')

api.post('/save-deck', ensureAuth, saveDeck )

module.exports = api