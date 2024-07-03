const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
},
type:{
    type:String,
    required:true,
    enum:["income","expense"]
    
},
amount:{
    type:Number,
    required:true,
},
category:{
    type:String,
    required:true,
    default:'uncategorized'
},
date:{
    type:Date,
    default: Date.now
},
description:{
    type:String,
    required:false,
}

},
{
    timestamps:true
})  

module.exports = mongoose.model('Transaction',transactionSchema)