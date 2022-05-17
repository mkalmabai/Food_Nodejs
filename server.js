
const express = require("express");
const app = express();
const path = require("path");
const logger = require('morgan');
//git add .const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({extended:false}));
//app.use(cookieParser());
app.use(bodyParser.json())

app.set('views', path.join(__dirname,'views'));
app.set("view engine", "ejs");



const PORT = process.env.POST||3000
const homeRouter = require(path.join(__dirname, "routes", "home"))
// const menuRouter = require('./routes/menu')
// const searchmealRouter = require('./routes/searchmeal')
// const orderRouter = require('./routes/order')


app.use('/',homeRouter);
app.use('/home',homeRouter);
// app.use('/menu',menuRouter);
// app.use('/searchmeal',searchmealRouter);
// app.use('/order',orderRouter);








app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`);
});