const express=require('express');
const app=express();

app.set('view engine','ejs')
app.use('/static',express.static('public'))

//ROUTES
const homeRoute=require('./routes/homeRoute')
const cardRoute=require('./routes/createCardRoute')


app.use('/',homeRoute);
app.use('/create-card',cardRoute);

app.listen(3000,()=>{
    console.log("server is now listening on 3000");
})