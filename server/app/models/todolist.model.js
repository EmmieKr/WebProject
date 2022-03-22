module.exports = (sequelize, Sequelize) => {
    const Todolist = sequelize.define("todolist", {
    name: {
    type: Sequelize.STRING
    },
    processToDo: {
    type: Sequelize.BOOLEAN
    },
    processDoing: {
        type: Sequelize.BOOLEAN
    },
    processDone: {
        type: Sequelize.BOOLEAN
    }
    });
return Todolist;
};
