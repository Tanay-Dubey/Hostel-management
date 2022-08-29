const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const complaintSchema = require("./Complaint");
const detailSchema = require("./Detail");

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    detailsFilled: { type: Boolean, default: false },
    details: {
        type:Schema.Types.ObjectId,
        ref:"Details"
    },
    complaints: { type: [complaintSchema.Schema] }
}, { timestamps: true });

module.exports = mongoose.model("Users", userSchema);