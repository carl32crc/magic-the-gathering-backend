'use strict'

// models
const Article = require('../../models/articles')

const getMyArticles = (req, res) => {

    const id = req.params.id

    Article.find({user: id}).populate({ path: 'user' }).exec((err, user) => {

        if (id !== req.user.sub) {
            return res.status(403).send({ message: 'No tienes permisos' })
        }
        
        if (err) {
            res.status(500).send({ message: 'Error al realizar la peticion' })
        } else {
            if(!user) {
                res.status(404).send({ message: 'El articulo no existe' })
            } else {
                res.status(200).send({ user: user })
            }
        }

    })

}

module.exports = getMyArticles