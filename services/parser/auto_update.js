
const Article = require('../../models/articles')

const autoUpdate = () => {
    
    Article.find({}, (err, article) => {
        
        console.log(article);    
        
    })
}


module.exports = autoUpdate