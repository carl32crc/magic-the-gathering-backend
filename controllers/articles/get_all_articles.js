'use strict'

// models
const Article = require('../../models/articles')

const getAllArticles = (req, res) => {

    // TODO: Filter by date (more current less)

    Article.find({}, (err, articles) => {

        res.status(200).send({
            articles: articles
        })

    })
}

module.exports = getAllArticles