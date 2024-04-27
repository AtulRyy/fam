const mongoose=require('mongoose')


const members=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,    
        required:true
    },
    memberId:{
        type:String,
        unique:true,
        required:true
    }
})

module.exports=mongoose.model('Members',members);