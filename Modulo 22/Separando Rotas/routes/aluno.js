const express = require("express");
const router = express.Router();

let alunos = [
    { id: 0, nome: "Jose" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "joão" },
    { id: 3, nome: "Marcos" }
]

router.get("/aluno", (req, res, next) => {
    console.log(req.body)

    let aluno = alunos[req.body.id]
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
});


router.get("/aluno", (req, res, next) => {

    console.log(req.query)

    let aluno = alunos[req.query.id]
    if (aluno) {
        res.json(aluno);
    } else {
        res.send("Não encontrado");
    }

});

router.get("/aluno/all", (req, res) => {
    res.json(alunos)
})

router.get("/aluno/:id", (req, res) => {

    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    res.json(aluno);


});

module.exports = router;