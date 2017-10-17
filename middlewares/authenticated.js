'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const secret = require('../token/secret_token.json')

const authenticated = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).send({
            message: 'The request not have athorization headers'
        })
    } else {

        const token = req.headers.authorization.replace(/['"]+/g, '')
        
        try {
            
            const payload = jwt.decode(token, secret.secret)
    
            if ( payload.exp <= moment().unix ) {
                return res.status(401).send({
                    message: 'Expiration token'
                })
            }
    
            req.user = payload
    
        } catch(ex) {
            return res.status(404).send({
                message: 'The token is not valid'
            })
        }
    
        next()
    }

}

module.exports = authenticated