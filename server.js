const express = require('express')
const path = require("path");
const mongoose = require("mongoose");
const app = express()
const PORT = process.env.PORT||3000
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.json())

 app.use("/", require(path.join(__dirname, "routes", "Signin")));
app.use("/Signin", require(path.join(__dirname, "routes", "Signin")));
 app.use("/Signup", require(path.join(__dirname, "routes", "Signup")));
app.use("/home", require(path.join(__dirname, "routes", "home")));
app.use("/menu", require(path.join(__dirname, "routes", "menu")));
app.use("/order", require(path.join(__dirname, "routes", "order")));
app.use("/searchmeal", require(path.join(__dirname, "routes", "searchmeal")));


app.use(express.static( "public"));




app.use(bodyParser.urlencoded({extended: true}));

const UserRoute = require('./routes/UserRoute')
app.use('/',UserRoute)
const dbConfig = require('./config/databsconfig.js');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});





const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




app.get("/submit", function(req, res){
    res.render("submit");
});






app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`);
});