const express = require('express');
const path = require('path');

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client/index.html')))

app.get("/", (req, res) => {
    res.send("<h1>Hello word GET<h1/>")
})

app.post("/", (req, res) => {
    res.send("<h1>Hello word POST<h1/>")
})

app.put("/", (req, res) => {
    res.send("<h1>Hello word PUT<h1/>")
})

app.delete("/", (req, res) => {
    res.send("<h1>Hello word DELETE<h1/>")
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`)
})