const express=require('express')
const route=express.Router();

route.get('/',(req,res)=>{
    res.render('card')
})
route.post('/',(req,res)=>{
    
})
module.exports=route;