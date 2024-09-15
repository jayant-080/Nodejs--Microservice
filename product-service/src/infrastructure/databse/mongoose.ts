import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/micro-product-db'

export const connectToDatabase =async()=>{

    try {

        await mongoose.connect(MONGO_URI);
        console.log("database connected")
        
    } catch (error) {
        console.log("Error while connecting with mongodb "+error)
        process.exit(1)
    }

}