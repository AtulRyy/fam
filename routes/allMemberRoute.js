const express=require('express')
const router=express.Router();

const Members=require('../models/members')

router.get('/', async (req, res) => {
    const allMembers=await Members.find({})
    res.render('allMembers',{data:allMembers})
})

module.exports=router