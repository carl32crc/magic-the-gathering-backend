'use strict'

// models
const Article = require('../../models/articles')

const getAllArticles = (req, res) => {

    const query = {}
    
    const options = {
      sort: { creationDate: -1 },
      limit: 2,
      page: 2
    }
    
    Article.paginate(query, options).then((articles) => {
        
        res.status(200).send({
            articles: articles
        })
    })
}

module.exports = getAllArticles