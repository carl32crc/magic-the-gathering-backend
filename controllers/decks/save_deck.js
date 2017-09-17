'use strict'

// modules
const bcrypt = require('bcrypt-nodejs')

// models
const Deck = require('../../models/decks')

const saveDeck = (req, res) => {

    const params = req.body

    if ( params.title && params.subtitle ) {
        
        // console.log(params.colors.length);

        const deck = new Deck( params )

        deck.save((err, deckStored) => {
            
            if (err) {
                res.status(500).send({ message: 'Error al guardar' })
            } else {
                if( !deckStored ) {
                    res.status(404).send({ message: 'El articulo no se ha guardado' })
                } else {
                    res.status(200).send({ 
                        message: 'El articulo se ha guardado correctamente', 
                        deck: deckStored 
                    })
                }
            }

        })

    }
}

module.exports = saveDeck