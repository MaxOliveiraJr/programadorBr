const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'client')))
app.use("/meusite",express.static(path.join(__dirname,'client/inx.html')))

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server Runing on Port ${PORT}`)
})