const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:8081'
};
app.use(cors(corsOptions))
// parse requests of content-type - application/json
const db = require('./app/models')
db.sequelize.sync()
//  used for development
//  db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
//   });
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// simple route just for test
app.get('/', (req, res) => {
  res.json({ message: 'Welcome your server is running :)' })
})
// set port, listen for requests

//require('./app/routes/todolist.route')(app);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
