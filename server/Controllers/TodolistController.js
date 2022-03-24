import { log } from 'console';
import { todolist as _todolist } from '../models';
import Todolist from '../Models/Todolist';

export async function create(req, res) {
    log(req);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    log(req);
    const todo = {
        name: req.body.name,
        processTodo: req.body.processTodo,
        processDoing: req.body.processDoing,
        processDone: req.body.processDone
    };
    _todolist.create(todo)

        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the todo."
            });
        });
}
export async function getAll(req, res) {
    let objectArray = [];
    let object = {
        id: null,
        name: "",
        processTodo: false,
        processDoing: false,
        processDone: false
    };
    try {
        const todolist = await _todolist.findAll({
            raw: true
        })
            .then(data => {
                res.send(data);
            });
    } catch (err) {
        log(err);
        res.status(400).send({
            error: "Some error occurred while retrieving todolists."
        });
    }
}
export
    //update
    async function update(req, res) {
    const id = req.params.id;
    _todolist.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Todo was updated successfully.'
                });
            } else {
                res.send({
                    message: `Cannot update todo with id=${id}. Maybe todo was not
                    found or is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Todo with id=${id}`
            });
        });
}
export
    //delete
    async function deleteId(req, res) {
    const id = req.params.id;
    _todolist.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Todo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete todo with id=${id}. Product not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Todo with id=${id}`
            });
        });
}