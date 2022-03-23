/*
module.exports = {

    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'db_todolist',
    dialect: "mysql",
    options: {
        dialect: process.env.DIALECT || "mysql",
        host: process.env.HOST || "localhost",
        storage: "./db_todolist.mysql"
    }
};
*/
module.exports = {
    port: process.env.PORT || 8080,
    db: {
        database: process.env.DB_NAME || "db_todolist",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        options: {
            dialect: process.env.DIALECT || "mysql",
            host: process.env.HOST || "localhost",
            storage: "./db_todolist.mysql"
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || "secret"
    }
}