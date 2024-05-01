const express=require('express')
const route=express.Router();

const Members=require('../models/members')


route.get('/:id',async(req,res)=>{
    const memberId=req.params.id
    const member=await Members.findOne({_id:memberId})
    res.render('card',{memberId:memberId,name:member.name})
})
route.post('/',(req,res)=>{
    
})
module.exports=route;