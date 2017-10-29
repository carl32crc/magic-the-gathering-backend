'use strict'

// models
const User = require('../../models/users')

const fs = require('fs')

const deleteUser = (req, res) => {

    User.findByIdAndRemove(req.params.id, (err, user) => {  

        if ( user.image ) {
            fs.unlink( 'uploads\\users\\' + user.image , (err) => {})
        }
  
        let response = {
            message: 'User successfully deleted',
            user: user
        }
        
        res.status(200).send(response);
    });

}

module.exports = deleteUser