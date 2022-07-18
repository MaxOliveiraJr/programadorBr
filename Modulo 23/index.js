const PORT = 3000;
const express = require("express");
const path = require("path");
const apiRouter = require("./routes/api");
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use("/api",apiRouter);




app.listen(PORT, () => {
    console.log('Server running port', PORT)
});

