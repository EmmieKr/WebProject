const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./Config/config.js')
const { sequelize } = require('./models/index.js')
const app = express()
var corsOptions = {
    origin: 'http://localhost:8081'
};
app.use(cors(corsOptions));

require('./routes')(app)

//---------const db = require("./app/models");
//---------db.sequelize.sync();
app.use(bodyParser.json())
app.get("/", (req, res) => {
    res.json({ message: "Welcome! your server is running :)" })
})
//----------require("./app/routes/product.route")(app);

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 8080)
        console.log("`Server is running on port ${PORT}.`")
    })
/*
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
*/
