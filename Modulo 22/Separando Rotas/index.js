const express = require('express');
const app = express();
const bodyParse = require("body-parser");
var aluno = require("./routes/aluno");




app.use(bodyParse.urlencoded());

app.use("/api", aluno);


app.get("/", (req, res) => {
    res.send("Hello World")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`)
})