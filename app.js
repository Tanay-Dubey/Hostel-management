const express=require("express");
const connectDB = require("./db");
const app=express();
const path=require("path");
const userRouter=require("./routes/users");
const homeRouter=require("./routes/home");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port=process.env.PORT || 3000;

connectDB();

app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "ejs");

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get("/",(req,res,next)=>{
    res.render("signup");
});
app.use("/users",userRouter);
app.use("/home",homeRouter);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});