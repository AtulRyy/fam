const express=require('express')
const route=express.Router();


route.get('/:id',(req,res)=>{
    memberId=req.params.id
    res.render('card',{memberId:memberId})
})
route.post('/',(req,res)=>{
    
})
module.exports=route;