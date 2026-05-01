import mongoose from "mongoose";
//Connect to the Mongodb database

const connectDB = async()=>{
    mongoose.connection.on('connected', ()=> console.log('Database Connected'))
    await mongoose.connect(`${process.env.MONGODB_URL}/demo`)
}

export default connectDB

