import imageModel from './image.schema';


class Image{

    async getImages(callback:(err:any, data?:Array<Object>)=>any){
        try {
            const img = await imageModel.find({});
            callback(null, img )
        } catch (error) {
            callback(error, undefined);
        }

    }

    async addImage(imageObject:Object,callback:(err:any, data?:Object)=>any){
        try {
            const img = await imageModel.create({...imageObject});
            const sv = await img.save()
            callback(null, sv)
        } catch (error) {
            callback(error, undefined);
        }

    }

    async deleteImage(imageFilter:Number ,callback:(err:any, data:any)=>any){
        try {
            const img = await imageModel.findOneAndDelete({"label":imageFilter});
            
            callback(null, img);

        } catch (error) {
            callback(error, undefined);
        }

    }
    

}

export default Image