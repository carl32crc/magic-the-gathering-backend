'use strict'

// models
const Article = require('../../models/articles')

const getAllArticles = (req, res) => {

    const page = req.query.page
    const query = {isDelete: false}
    
    const options = {
      sort: { creationDate: -1 },
      limit: 2,
      page: page
    }
    
    Article.paginate(query, options).then((articles) => {
        
        res.status(200).send({
            articles: articles
        })
    })
}

module.exports = getAllArticles