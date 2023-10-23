const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
    iname:{
        type:String,
        required:'This field is required'
    },
    ilocation:{
        type:String,
        required:'This field is required'
    },
    iratings:{
        type:Number,
        required:'This field is required',
        default:0
    },
    iratingscount:{
        type:Number,
        default:0
    },
    istart:{
        type:Number,
        required:'This field is required'
    },
    irange:{
        type:String,
        required:'This field is required'
    },
    iprofilepic:{
        type:String,
        required:'This field is required'
    },
    iabout:{
        type:String,
        required:'This field is required'
    },
    isince:{
        type:String,
        required:'This field is required'
    },
    iyearop:{
        type:String,
        required:'This field is required'
    },
    iservicetype:{
        type:String,
        required:'This field is required'
    },
    ishipping:{
        type:String,
        required : 'This field is required'
    },
    ispeciality:{
        type:String,
        required : 'This field is required'
    },
    iminorder:{
        type:String,
        required : 'This field is required'
    },
});

module.exports = mongoose.model('Invitation',inviteSchema);