'use strict'

// models
const Article = require('../../models/articles')

const getArticle = (req, res) => {

    const update = req.body
    let query = {}

    req.params.id !== 'my-articles' ? query = {_id: req.params.id} : query = {}

    Article.find(query).populate({ path: 'user' }).exec((err, article) => {
        
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