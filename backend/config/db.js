import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
        
        } catch (err) {
            console.error(`Errors ${err.message}`);
            process.exit(1);
            }

}