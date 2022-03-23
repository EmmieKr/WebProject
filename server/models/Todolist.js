module.exports = (sequelize,DataTypes) => {
    const Todolist = sequelize.define("todolist", {
        name: {
            type: DataTypes.STRING(50)
        },
        procesToDo: {
            type: DataTypes.BOOLEAN
        },
        processDoing: {
            type: DataTypes.BOOLEAN
        },
        processDone: {
            type: DataTypes.BOOLEAN
        }
    })
    return Todolist;
}



