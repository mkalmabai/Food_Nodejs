const express = require('express')
const path = require("path");
const app = express()
const PORT = process.env.PORT||3000
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.json())
app.use("/", require(path.join(__dirname, "routes", "home")));
// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + "/views/home.html");
// })
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});