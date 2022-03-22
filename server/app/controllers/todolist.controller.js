const console = require('console');
const db = require('../models')
const Todolist = db.todolists;
const Op = db.Sequelize.Op;
// Create and Save a new todolisy
exports.create = (req, res) => {
// Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    return;
}
// Create a todo
const todo = {
    name: req.body.name,
    processType: req.body.processType
}
// Save product in the database
Todolist.create(todo)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
    message:
        err.message || "Some error occurred while creating the todo."
    })
})
}
// Retrieve all todo from the database.
exports.findAll = (req, res) => {
console.log('a')
Todolist.findAll()
.then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
message:
err.message || "Some error occurred while retrieving todolists."
})
})
}
// Find a single todo with an id
exports.findOne = (req, res) => {
// console.log('id')
const id = req.params.id
Todolist.findByPk(id)
.then(data => {
res.send(data)
})
.catch(err => {
res.status(500).send({
message: `Error retrieving todo with id=${id}`
});
});
}
// Update a todo by the id in the request
exports.update = (req, res) => {
const id = req.params.id;
Todolist.update(req.body, {
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
})
})
}
// Delete a todo with the specified id in the request
exports.delete = (req, res) => {
const id = req.params.id;
Todolist.destroy({
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
// Delete all products from the database.
exports.deleteAll = (req, res) => {
}
// Find all products type
exports.findByType = (req, res) => {
console.log('b'+req.query.id)
const type = req.query.type
var condition = type ? { type: { [Op.like]: `%${type}%` } } : null
Todolist.findAll({ where: condition })
.then(data => {
res.send(data);
})
.catch(err => {
res.status(500).send({
message:
err.message || "Some error occurred while retrieving data."
})
})
}
