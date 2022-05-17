const express = require('express')
const path = require("path");
const app = express()
const PORT = process.env.PORT||3000
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.json())
app.use("/", require(path.join(__dirname, "routes", "home")));
app.use("/menu", require(path.join(__dirname, "routes", "menu")));

app.use(express.static( "public"));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});