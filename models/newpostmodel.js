const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        trim: true,
        maxLenght: 500,

    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;