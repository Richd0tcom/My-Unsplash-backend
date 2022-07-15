import mongoose,{ Schema, model } from 'mongoose';

const autoIncrementFactory:any = require('mongoose-sequence');

const autoincrement = autoIncrementFactory(mongoose)




const schema = new Schema({
    imageId:Number,
    label:String,
    imageURL:String
})






schema.plugin(autoincrement, {inc_field: 'imageId'});

const imageModel = model('images',schema);
export default imageModel;
