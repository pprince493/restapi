const mongoose = require('mongoose');
productSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    code:String,
    title:String,
    description:String,
    mrp:Number,
    sp:Number,
    discountPercent:Number,
    ImagePath:String
})

module.exports=mongoose.model('product',productSchema)