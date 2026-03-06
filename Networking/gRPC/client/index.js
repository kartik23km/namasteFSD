const client = require("./client")

const express = require("express");
const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.json());
app / use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    client.getAll(null, (err, data) => {
        res.send(data.customers)
    })
})
app.post('/create', () => {

})
app.post('/update', () => {

})
app.post('/remove', () => {

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running at: ", PORT);

})