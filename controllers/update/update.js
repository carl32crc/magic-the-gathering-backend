'use strict'

const update = (model, req, res) => {
    const id = req.params.id
    const update = req.body

    model.findByIdAndUpdate(id, update, {new:true}, (err, dataUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar' })
        } else {
            if(!dataUpdated) {
                res.status(404).send({ message: 'No se  ha podido actualizar' })
            } else {
                res.status(200).send({ dataUpdated: dataUpdated })
            }
        }
    })

}

module.exports = update