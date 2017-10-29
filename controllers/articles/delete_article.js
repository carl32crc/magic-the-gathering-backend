'use strict'

// models
const Article = require('../../models/articles')

const deleteArticle = (req, res) => {

    const id = req.params.id

    Article.find({_id: id}, (err, article) => {

        const userId = String(article[0].user)

        if (userId === req.user.sub) {
            
            Article.findByIdAndRemove( id, (err, article) => {  
  
                let response = {
                    message: 'Article successfully deleted',
                    article: article
                }
                
                res.status(200).send(response);
            });
            
        } else {
            res.status(403).send({
                message: 'No tienes permisos para eliminar este articulo.'
            })
        }
    })

}

module.exports = deleteArticle