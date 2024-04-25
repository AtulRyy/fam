const express=require('express')
const route=express.Router();

route.get('/',(req,res)=>{
    res.send("CARD ROUTE JS")
})
route.post('/',(req,res)=>{
    
})
module.exports=route;