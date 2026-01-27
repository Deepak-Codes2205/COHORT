const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/about',(req,res)=>{
    res.send("Helloe from About")
})

app.get('/home',(req,res)=>{
    res.send("Helloe from home")
})
app.listen(3000)