const console = require('console')
const models = require('../models');
const Todolist = require('../Models/Todolist');

module.exports = {
    async create(req,res){
        console.log(req)
        if(!req.body){
            res.status(400).send({
                message:"Content can not be empty!"
            });
            return;
        }
        console.log(todo.name);
        const todo = {
            name: todo.name,
            processTodo: todo.processTodo,
            processDoing: todo.processDoing,
            processDone: todo.processDone
        }
        models.todolist.create(todo)
        
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the todo."
                })
            })
    },
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
    },
    //update
    async update(req,res){
        const id = req.params.id;
        models.todolist.update(req.body,{
            where: {id: id}
        })
        .then(num => {
            if(num == 1){
                res.send({
                    message: 'Todo was updated successfully.'
                })
            } else {
                res.send({
                    message: `Cannot update todo with id=${id}. Maybe todo was not
                    found or is empty!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Todo with id=${id}`
            })
        })
    },
    //delete
    async delete(req,res){
        const id = req.params.id;
        models.todolist.destroy({
            where: {id: id}
        })
        .then(num => {
            if(num==1){
                res.send({
                    message: "Todo was deleted successfully!"
                })
            } else {
                res.send({
                    message: `Cannot delete todo with id=${id}. Product not found!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Todo with id=${id}`
            })
        })
    }
}