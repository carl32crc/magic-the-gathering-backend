'use strict'

const isAdmin = (req, res, next) => {

    if (req.user.role !== 'ROLE_ADMIN') {
        return res.status(200).send({message: 'Only for admins'})
    }
    
    next()
}

module.exports = isAdmin