module.exports = app => {
    const todolist = require("../controllers/todolist.controller.js");
    var router = require("express").Router();
    // Create a new todo
    router.post("/", todolist.create);
    // Retrieve all todo
    router.get("/", todolist.findAll);
    // Retrieve all todo type
    router.get("/type", todolist.findByType);
    // Retrieve a single todo with id
    router.get("/:id", todolist.findOne);
    // Update a todo with id
    router.put("/:id", todolist.update);
    // Delete a todo with id
    router.delete("/:id", todolist.delete);
    // Delete all todo
    router.delete("/", todolist.deleteAll);
    app.use('/api/todolist', router);
    }