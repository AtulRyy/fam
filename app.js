const express=require('express');
const app=express();

app.set('view engine','ejs')
app.use('/static',express.static('static'))

//ROUTES
const homeRoute=require('./routes/homeRoute')
const cardRoute=require('./routes/createCardRoute')
const loginRoute=require('./routes/loginRoute')
const memberRoute=require('./routes/memberRoute')


app.use('/',homeRoute);
app.use('/card',cardRoute);
app.use('/login',loginRoute)
app.use('/member',memberRoute)

app.listen(3000,()=>{
    console.log("server is now listening on 3000");
})