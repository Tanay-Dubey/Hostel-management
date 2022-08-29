const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const complaintSchema=new Schema({
    issueType:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,required:true},
    status:{type:String,required:true}
},{timestamps:true});

module.exports=mongoose.model("Complaints",complaintSchema);