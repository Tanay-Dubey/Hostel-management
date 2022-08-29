const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const detailSchema=new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    telephone:{type:Number,required:true},
    hostel:{type:String,required:true},
    hostelFees:{type:String,required:false},
    roomNo:{type:String,required:true},
},{timestamps:true});

module.exports=mongoose.model("Details",detailSchema);

