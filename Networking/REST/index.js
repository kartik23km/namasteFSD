import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())

app.all('/', (req, res) => {
    console.log({ req });
    console.log("res");
    res.send("I am Up!!")

})

const PORT = 5111;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

const todoData = [
    {
        id: 1,
        title: "TASK 1",
        completed: false
    },
    {
        id: 2,
        title: "TASK 2",
        completed: true
    }
]

// GET
app.get('/todo', (req, res) => {
    res.json(todoData)
});
//  create
app.post('/todo', (req, res) => {
    const newTodo = req.body;
    todoData.push(newTodo);
    res.json({
        message: "New Data added"
    })
})
// PUT
app.put('/todo',)