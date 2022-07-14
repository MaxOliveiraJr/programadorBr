const express = require('express');
const bodyParse = require("body-parser");

let alunos = [
    { id: 0, nome: "Jose" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "joão" },
    { id: 3, nome: "Marcos" }
]

const app = express();

app.use(bodyParse.urlencoded());


app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/alunos", (req, res) => {


    res.json(JSON.stringify(alunos));
});
app.get("/aluno", (req, res) => {

    console.log(req.body)
    console.log(req.query)

    let aluno = alunos[req.body.id]
    let aluno1 = alunos[req.query.id]

    res.json( aluno.nome + aluno1.nome );
    // res.json(aluno1);

});

app.get("/aluno/:id", (req, res) => {

    console.log(req.params.id)

    let aluno = alunos[req.params.id]

    res.json(aluno);


});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`)
})