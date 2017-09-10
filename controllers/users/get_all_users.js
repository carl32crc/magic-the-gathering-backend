'use strict'

// models
const User = require('../../models/users')

const getAllUsers = (req, res) => {

    User.find({}, (err, users) => {

        res.status(200).send({
            users: users
        })

    })
}

module.exports = getAllUsers