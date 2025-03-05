const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const NotesSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"daily work"
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('notes',NotesSchema);