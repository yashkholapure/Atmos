const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;

//public static path

const staticPath=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../views");
const partials_path=path.join(__dirname,"../template/partials");

app.set('view engine','hbs');
app.set('views ',templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

//routing

app.get("",(req,res)=>{
    res.render('index')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("/map",(req,res)=>{
    res.render('map')
})
app.get("*",(req,res)=>{
    res.render('error')
})

app.listen(port,()=>{
    console.log("working")
})