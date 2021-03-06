'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// routes
const routesCards    = require('./routes/cards')
const routesUsers    = require('./routes/users')
const routesArticles = require('./routes/articles')
const routesSlider   = require('./routes/slider')

// midlewares body-parser

app.use( bodyParser.urlencoded( {extended:false} ) )
app.use( bodyParser.json() )

// config headers and cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 
               'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

// Base routes

app.use('/api', routesCards)
app.use('/api', routesUsers)
app.use('/api', routesArticles)
app.use('/api', routesSlider)

module.exports = app