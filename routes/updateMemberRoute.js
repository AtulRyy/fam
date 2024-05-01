const express = require('express')
const router = express.Router();

router.route("/:id")
    .get((req, res) => {
        const memberId=req.params.id;
        res.render("edit")
    })
    .post((req,res)=>{
        
    })