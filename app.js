const express=require('express');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const mongoose=require('mongoose')

app.set('view engine','ejs')
app.use('/static',express.static('static'))
app.use('/cards',express.static('cards'))

//ROUTES
const homeRoute=require('./routes/homeRoute')
const cardRoute=require('./routes/createCardRoute')
const loginRoute=require('./routes/loginRoute')
const memberRoute=require('./routes/memberRoute')

app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))



mongoose.connect(process.env.mongo_connect)
.then(()=>{
    console.log("DATABASE successfully connected");
    app.listen(5000,()=>{
        console.log("server is now listening on 5000");
    })
})
.catch((err)=>{
     console.log("mongodb error",err);
})


app.use('/',homeRoute);
app.use('/card',cardRoute);
app.use('/login',loginRoute)
app.use('/member',memberRoute)

