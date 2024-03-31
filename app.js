const express=require('express');
const app=express();

app.set('view engine','ejs')
app.use('/static',express.static('public'))

//ROUTES
const homeRoute=require('./routes/homeRoute')


app.use('/',homeRoute);

app.listen(3000,()=>{
    console.log("server is now listening on 3000");
})