const mongoose = require("mongoose");



const connectDB = async() => {
 try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected`);
 } catch (error) {
    console.log(error);
    process.exit(1);
 }

}
module.exports = connectDB;


// Use this funvtion in server.js to connect to mongoDB 

// const startServer = async () => {
//     try {
//         await connectDB()
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// startServer();