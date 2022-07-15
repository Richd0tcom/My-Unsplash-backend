import mongoose from 'mongoose';

const connection = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bd7yh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
        console.log('db connected')
    } catch (error) {
        console.log(error);
    }
}

export default connection