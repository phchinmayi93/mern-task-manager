const dotenv = require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");

const Task = require("./models/taskModel");

const taskRoutes = require("./routes/taskRoute");

const cors = require("cors")







mongoose.set('strictQuery', true)
const app = express();


// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:["http://localhost:3000","https://mern-stack-app.onrender.com"]
}))
app.use("/api/tasks",taskRoutes);




// const logger = (req,res,next) =>{
//     console.log("Middleware run");
//     console.log(req.method);

//     next();
// }


// connectDB();

// Routes


app.get("/",(req,res)=>{
    res.send("Home Page")
})


  



const PORT = process.env.PORT || 5000

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Running on port ${PORT}`);
    })
})
.catch((err)=>console.log(err))

