import mongoose from 'mongoose';

const connection = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('db connected')
    } catch (error) {
        console.log(error);
    }
}

export default connection