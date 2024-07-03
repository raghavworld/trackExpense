const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
},
name:{
    type:String,
    required:true,
    default:'uncategorized'
},
type:{
    type:String,
    required:true,
    enum:["income","expense"]
}

},
{
    timestamps:true
})  

module.exports = mongoose.model('Category',categorySchema)