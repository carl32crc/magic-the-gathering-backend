'use strict'

// models
const User = require('../../models/users')

const getAllUsers = (req, res) => {

    User.find({role: 'ROLE_USER'}, (err, users) => {

        res.status(200).send({
            users: users
        })

    })
}

module.exports = getAllUsers