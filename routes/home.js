require("dotenv").config();
const express = require("express");
const Detail = require("../models/Detail");
const router = express.Router();
const app = express();
const User = require("../models/User");

router.get("/profile:userId", async (req, res, next) => {
    const user = await User.findById(req.params.userId);
    const details = await Detail.findById(user.details._id);
    res.render("profile", { id: req.params.userId, username: details.username, email: details.email, firstname: details.firstname, lastname: details.lastname, telephone: details.telephone, hostel: details.hostel, roomNo: details.roomNo, hostelFees: details.hostelFees });
});

router.get("/complaint:userId", (req, res, next) => {
    const user = await User.findById(req.params.userId);
    const details = await Detail.findById(user.details._id);
    res.render("complaint", { id: req.params.userId, email: details.email, firstname: details.firstname, lastname: details.lastname, hostel: details.hostel, roomNo: details.roomNo });
})
    .post("/complaint:userId", (req, res, next) => {
        var complaint = {
            issueType: req.body.issueType,
            description: req.body.description,
            date: req.body.date,
            status: "pending"
        }
        complaint=await details.save();
        const user ={
            complaints:[]
        };
        user.complaints.push(complaint);
        User.findByIdAndUpdate(req.params.userId,user,(err,docs)=>{
            res.render("home",{id:req.params.userId, username:docs.username});
        });

    });

module.exports = router;