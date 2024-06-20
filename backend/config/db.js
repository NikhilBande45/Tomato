import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://bandenikhil45:nSyAf5n5SG3cUoIi@cluster0.5legxxd.mongodb.net/food-del').then(()=>console.log("connection successful"));
}