const TodolistController = require('./Controllers/TodolistController')

module.exports = (app) => {
    app.get('/todolist', TodolistController.getAll)
}