const express = require("express");
const bodyParser = require('body-parser')
const router = express.Router();
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


let axios = require("axios");
const {response} = require("express");
let one = "https://api.openweathermap.org/data/2.5/weather?q=Astana&appid=e8b929b3d1806c1d3025257de5889fdd&units=metric";
let two = "https://www.themealdb.com/api/json/v1/1/categories.php#";
let thr = "https://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=e8b929b3d1806c1d3025257de5889fdd&units=metric";

const reqone = axios.get(one);
const reqtwo = axios.get(two);
const reqthr = axios.get(thr);


router
    .route("/")
    .get(async(req, res) => {

        axios.all([reqone,reqtwo,reqthr])
            .then(
                axios.spread((...responses) =>{
                    if(responses[0].status === 200 && responses[1].status ===200 && responses[2].status ===200){
                        console.warn(responses[0].data.sys.country);
                        console.log(response.statusCode);
                        const almatyData = responses[2];
                        const mealData = responses[1];
                        const wData = responses[0];

                        const temp = wData.data.main.temp;
                        const windSpeed = wData.data.wind.speed;
                        const wDescription = wData.data.weather[0].description;
                        const icon = wData.data.weather[0].icon;
                        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

                        console.warn(responses[1].data.categories[0].strCategory);

                        const beef = mealData.data.categories[0].strCategoryThumb;
                        const pasta = mealData.data.categories[5].strCategoryThumb;
                        const vege = mealData.data.categories[11].strCategoryThumb;
                        const goat = mealData.data.categories[13].strCategoryThumb;

                        const star = mealData.data.categories[9].strCategoryThumb;
                        const brek = mealData.data.categories[12].strCategoryThumb;
                        const dis = mealData.data.categories[2].strCategoryThumb;


                        console.warn(responses[2].data.main.temp);

                        const Atemp = almatyData.data.main.temp;
                        const AwindSpeed = almatyData.data.wind.speed;
                        const AwDescription = almatyData.data.weather[0].description;
                        const Aicon = almatyData.data.weather[0].icon;
                        const AimageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

                        res.render("order", {
                            temp0: temp,
                            windSpeed0:windSpeed,
                            wDescription0:wDescription,
                            icon0:icon,
                            imageURL0:imageURL,

                            beef:beef,
                            pasta:pasta,
                            vege:vege,
                            goat:goat,

                            Qtemp: Atemp,
                            QwindSpeed:AwindSpeed,
                            QwDescription:AwDescription,
                            Qicon:Aicon,
                            QimageURL:AimageURL,

                            star:star,
                            brek:brek,
                            dis:dis
                        })

                    }



                })
            )
            });





router
    .route("/")
    .get((req, res) =>
        res.render("order",{mk:0
        })
    );
module.exports = router;























// router
//     .route("/")
//     .get((req, res) => {
//         https.get("https://api.openweathermap.org/data/2.5/weather?q=Astana&appid=e8b929b3d1806c1d3025257de5889fdd&units=metric", (response) => {
//             console.log(response.statusCode);
//             response.on("data", (data) => {
//                 const wData = JSON.parse(data);
//                 const temp = wData.main.temp;
//                 const pressure = wData.main.pressure;
//                 const humidity = wData.main.humidity;
//                 const windSpeed = wData.wind.speed;
//                 const wDescription = wData.weather[0].description;
//                 const icon = wData.weather[0].icon;
//                 const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//
//                 res.render("order.html", {
//                     temp0: temp,
//                     pressure0:pressure,
//                     humidity0:humidity,
//                     windSpeed0:windSpeed,
//                     wDescription0:wDescription,
//                     icon0:icon,
//                     imageURL0:imageURL
//                 })
//             });
//         })
//     });
// //


//
// router
//     .route("/")
//     .get((req, res) => {
//         https.get("https://www.themealdb.com/api/json/v1/1/categories.php#", (response) => {
//             console.log(response.statusCode);
//             response.on("data", (data) => {
//                 const Data = JSON.parse(data);
//                 const pasta = Data.categories[5].strCategory;
//
//                 res.render("order.html", {
//                     pasta0: pasta
//
//                 })
//             });
//         })
//     });
