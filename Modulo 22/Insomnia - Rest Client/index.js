const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname,'client')))
app.use("/meusite",express.static(path.join(__dirname,'client/inx.html')))

app.get("/",(req,res)=>{
    
    res.send("Hello, world from GET")
})
app.post("/",(req,res)=>{
    
    res.send("Hello, world from POST")
})
app.put("/",(req,res)=>{
    
    res.send("Hello, world from PUT")
})
app.delete("/",(req,res)=>{
    
    res.send("Hello, world from DELETE")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server Runing on Port ${PORT}`)
})