'user strict'

const express = require('express')
const api = express.Router()

// controllers
const saveDeck = require('../controllers/decks/save_deck')

const update = require('../controllers/update/update')

// middlewares
const ensureAuth = require('../middlewares/authenticated')

// models
const Deck = require('../models/decks')

api.post('/save-deck', ensureAuth, saveDeck )

api.put('/update-deck/:id', ensureAuth, update.bind(null, Deck) )

module.exports = api