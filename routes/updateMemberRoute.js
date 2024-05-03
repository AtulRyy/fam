const express = require('express')
const router = express.Router();
const Members = require("../models/members")

router.route("/:id")
    .get(async (req, res) => {
        const memberId = req.params.id;
        const member = await Members.findById(memberId);
        res.render("editMember", { member: member })
    })
    .post( async (req, res) => {
        const memberId = req.params.id;
        const member= await Members.findById(memberId)
        const updatedData={name:req.body.name};
        if(member.email!==req.body.email){
            updatedData.email=req.body.email;
        }
        if(member.phone!==req.body.phone){
            updatedData.phone=req.body.phone
        }
        await Members.findByIdAndUpdate(memberId, updatedData)
        res.redirect("/member/all")
    })


module.exports = router