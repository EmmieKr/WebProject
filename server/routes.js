const TodolistController = require('./Controllers/TodolistController')

module.exports = (app) => {
    app.get('/todolist', TodolistController.getAll)
    app.post('/todolist',TodolistController.create)
    app.put('/todolist/:id',TodolistController.update)
    app.delete('/todolist/:id',TodolistController.delete)
}