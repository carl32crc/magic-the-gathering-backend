
const Deck = require('../../models/decks')

const autoUpdateDecks = () => {
    
    Deck.find({}, (err, decks) => {
        
        console.log(decks);    
        
    })
}


module.exports = autoUpdateDecks