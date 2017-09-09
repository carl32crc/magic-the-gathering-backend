'use strict'

// services
const getData = require('../../services/get_data')

const cardName = (req, res) => {
    
    const cardName = req.params.name

    getData('GET', `http://api.magicthegathering.io/v1/cards?page=1&pageSize=10&name=${cardName}`, true)
    .then( data => {
      
      if (data.cards.length > 0) {
        res.status(200).send({
            message: 'Send data ok',
            cards: data
        })
      } else {
        res.status(404).send({
            message: 'This card not exist'
        })
      }
        
    })
    .catch( error => {  
        res.status(500).send({
            message: 'Fail request to server',
        })
    })
    
}

module.exports = cardName
