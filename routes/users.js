require("dotenv").config();
const express=require("express");
const router=express.Router();
const app=express();
const User=require("../models/User");
const Detail=require("../models/Detail");
const axios=require("axios");

app.use(express.json());

router.post("/signup",async (req,res,next)=>{
    console.log("This is POST request on signup");
    const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    const response=await user.save();
    console.log(response._id);
    res.render("details",{id:response._id, username:response.username,email:response.email});
});

router.post("/login",async (req,res,next)=>{
    console.log("This is a post request on login");
    User.find({username:req.body.username})
    .then((err,docs)=>{
        res.render("home",{id:req.params.userId, username:docs.username});
    })
});

router.post("/details/:userId",async (req,res,next)=>{
    console.log("This is POST request on details");
    var details=new Detail({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        telephone:req.body.telephone,
        hostel:req.body.hostel,
        hostelFees:req.body.hostelfees,
        roomNo:req.body.roomNo
    });
    details=await details.save();
    const user={
        detailsFilled:true,
        details:details
    };

    
    User.findByIdAndUpdate(req.params.userId,user,(err,docs)=>{
        res.render("home",{id:req.params.userId, username:docs.username});
    });
    
});


module.exports=router;
