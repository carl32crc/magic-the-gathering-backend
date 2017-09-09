'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/magic', { useMongoClient: true })
.then( ()=> {
    console.log('Connect to DB ok')

    app.listen( port, () => {
        console.log('Server with express ok.');
    } )
})
.catch( err => console.log(err) )