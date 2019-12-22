const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express();

app.use(cors())
app.use(bodyParser.json())

require('./db')(app);
require('./config/swagger')(app)

app.get("/auth/signup", (req, res) => {
    res.send("Hello world!");
});

app.get("/auth/signin", (req, res) => {
    res.send("Hello world!");
});

app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
});
