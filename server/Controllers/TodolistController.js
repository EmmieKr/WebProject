const console = require('console')
models = require('../models')

module.exports = {
    async getAll(req, res) {
        let objectArray = []
        let object = {
            id: null,
            name: "",
            processTodo: false,
            processDoing: false,
            processDone: false
        }
        try {
            const todolist = await models.todolist.findAll({
                raw: true
            })
            .then(data => {
                res.send(data)
            })
        }catch (err) {
            console.log(err)
            res.status(400).send({
                error: "Some error occurred while retrieving todolists."
            })
        }
    }
}