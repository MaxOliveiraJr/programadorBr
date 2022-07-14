const express = require('express');
const path = require('path');
const bodyParse = require("body-parser");

const app = express();

let hello = (req, res) => {

    res.send("hello world")

}

let consoleMethod = (req, res, next) => {
    console.log(req.body)
    next();
}

app.use("/", bodyParse.json())
app.use("/", consoleMethod)

app.get("/", hello)
app.post("/", hello)

// app.get("/", consoleMethod, hello)
// app.post("/", consoleMethod, hello)
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`)
})