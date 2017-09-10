'use strict'

// models
const User = require('../../models/users')

const updateUser = (req, res) => {
    const userId = req.params.id
    const update = req.body

    if (userId != req.user.sub) {
        return res.status(500).send({ message: 'No tienes permisos' })
    }

    User.findByIdAndUpdate(userId, update, {new:true}, (err, userUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar usuario' })
        } else {
            if(!userUpdated) {
                res.status(404).send({ message: 'No se ha podido actualizar el usuario' })
            } else {
                res.status(200).send({ user: userUpdated })
            }
        }
    })

}

module.exports = updateUser