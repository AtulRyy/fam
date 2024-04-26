const express=require('express')
const route=express.Router();

route.get('/',(req,res)=>{
    res.render('members')
})
route.post('/',(req,res)=>{
    
})
module.exports=route;