import mongoose from 'mongoose';

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGODB Connection Succesfull: ", conn.connection.host);
    }catch(error){
        console.log("MONGODB Connection Error: ", error);
    }
}