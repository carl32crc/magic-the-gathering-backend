'use strict'

// models
const Article = require('../../models/articles')

const getAllArticles = (req, res) => {

    // TODO: Pagination

    Article.find({}, null, {sort: {creationDate: -1}}, (err, articles) => {

        res.status(200).send({
            articles: articles
        })

    });
}

module.exports = getAllArticles