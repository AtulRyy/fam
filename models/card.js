const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    rfid: {
        type: String,
        unique: true
    }

})
module.exports = mongoose.model("cardModel", cardSchema);