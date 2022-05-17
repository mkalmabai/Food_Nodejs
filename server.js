const express = require('express')
const app = express()
const PORT = process.env.PORT||3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/colcul1.html");
})
app.get('/colcul1', (req, res) => {
    res.sendFile(__dirname + "/colcul1.html");
})
app.get('/colcul2', (req, res) => {
    res.sendFile(__dirname + "/colcul2.html")
})

app.get('/colcul3', (req, res) => {
    res.sendFile(__dirname + "/colcul3.html")
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});