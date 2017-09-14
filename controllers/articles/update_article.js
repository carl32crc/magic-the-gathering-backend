'use strict'

// models
const Article = require('../../models/articles')

const updateArticle = (req, res) => {
    const articleId = req.params.id
    const update = req.body

    Article.findByIdAndUpdate(articleId, update, {new:true}, (err, articleUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar articulo' })
        } else {
            if(!articleUpdated) {
                res.status(404).send({ message: 'El articulo no se  ha podido actualizar' })
            } else {
                res.status(200).send({ article: articleUpdated })
            }
        }
    })

}

module.exports = updateArticle