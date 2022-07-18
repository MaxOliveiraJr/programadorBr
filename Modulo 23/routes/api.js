const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const posts = require("../model/posts");


const options = {
    origin: "localhost:3000"
}

router.use(cors());

router.get("/all", function (req, res) {
    res.json(JSON.stringify(posts.getAll()));
})

router.post("/new", bodyParser.json(), function (req, res) {

    let title = req.body.title;
    let description = req.body.description;

    posts.newsPosts(title, description);

    res.send("post adicionado")
})


module.exports = router;