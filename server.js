const express = require('express')
const app = express()
const PORT = process.env.PORT||3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})
// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + "/views/home.html");
// })

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});