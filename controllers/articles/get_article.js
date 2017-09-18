'use strict'

// models
const Article = require('../../models/articles')

const getArticle = (req, res) => {
    
    const articleId = req.params.id
    const update = req.body
    
    Article.find({ _id: articleId }).populate({ path: 'user' }).exec((err, article) => {
        
        if (err) {
            res.status(500).send({ message: 'Error al realizar la peticion' })
        } else {
            if(!article) {
                res.status(404).send({ message: 'El articulo no existe' })
            } else {
                res.status(200).send({ article: article })
            }
        }

    })

}

module.exports = getArticle