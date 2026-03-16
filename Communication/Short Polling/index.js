const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
let data = "initial Data"

app.get('/getData', (req, res) => {
    res.send({
        data
    })
})

app.get('/updateData', (res, req) => {
    data = "update Data";
    res.send({
        data
    })
})

const port = process.env.PORT || 5011

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})