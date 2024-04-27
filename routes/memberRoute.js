const express=require('express')
const route=express.Router();
const fs=require('fs')
const {createCanvas,loadImage,registerFont}=require('canvas')

const generateMemberId=require('../static/js/memberGenerator')
const getExpirationDate=require('../static/js/getExp')

const Members=require('../models/members');
const { default: mongoose } = require('mongoose');

route.get('/',(req,res)=>{
    res.render('members')
})
route.post('/',async(req,res)=>{
    try{
        const newMember=new Members({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            memberId:generateMemberId()
        })
        await newMember.save();
        console.log("New member successfully added");
        const member=await Members.findOne({email:req.body.email})
        generateCard(member.name.toUpperCase(),member.memberId,getExpirationDate());
        res.redirect("/member")

    }
    catch(err){
        return console.error(err);
    }
})
registerFont('./static/fonts/RadioCanada-Bold.ttf', { family: 'Radio Canada' });
async function generateCard(memberName,memberId,expiration) {
    // Load the template image
    const template = await loadImage('./static/images/cardBack.png');

    // Create a canvas
    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext('2d');

    // Draw the template image onto the canvas
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    // Add member name text
    ctx.fillStyle = '#ffffff'; // Set text color
    ctx.font = 'bold 36px "Radio Canada",Arial'; // Set font
    ctx.textAlign = 'left'; // Set text alignment
    ctx.fillText(memberName, 75, 95);
    
    ctx.font = 'bold 25px "Radio Canada",Arial';
    ctx.fillText(memberId, 75, 290);
    ctx.fillText(expiration, 375, 290); // Draw text

    // Save the canvas as an image file
    try{
        const out = fs.createWriteStream(`./cards/${memberName}_card.png`);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () => console.log('Card generated successfully'));
    }catch(err){
        console.log("Error creating card", err);
    }
}
module.exports=route;