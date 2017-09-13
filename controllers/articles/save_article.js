'use strict'

// modules
const bcrypt = require('bcrypt-nodejs')

// models
const Article = require('../../models/articles')

const saveArticle = (req, res) => {

    const params = req.body

    if ( params.title && params.subtitle && 
         params.summary && params.author && 
         params.content ) {
        
        const article = new Article( params )

        article.save((err, articleStored) => {
            
            if (err) {
                res.status(500).send({ message: 'Error al guardar' })
            } else {
                if( !articleStored ) {
                    res.status(404).send({ message: 'El articulo no se ha guardado' })
                } else {
                    res.status(200).send({ 
                        message: 'El articulo se ha guardado correctamente', 
                        article: articleStored })
                }
            }

        })

    }
}

module.exports = saveArticle