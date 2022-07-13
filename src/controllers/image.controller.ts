import Image from '../models/image.model';
import { Request, Response } from 'express';

const image = new Image();

const create = (req:Request, res:Response)=>{

    // res.status(200).json({"msg":"it works"})
    image.addImage(req.body,(err:any, data:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "img has not been created"}});
            console.log('image not created');
        } else{
            res.status(200).json(data)
            console.log('image created')
        }
    })
   
}

const get = (req:Request, res:Response)=>{

    image.getImages((err:any, data:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "could not get image"}});
            console.log('could not get image');
        } else{
            res.status(200).json({status:"success",imagesData:data})
            console.log('images gotten')
        }
    })
   
}
const deleteImage = (req:Request, res:Response)=>{

    image.deleteImage(req.params.id,(err:any, data:any)=>{
        if (err){
            res.status(400).json({status:"failed", data:{msg: "could not delete image"}});
            console.log('could not delete image');
        } else{
            res.status(200).json({status:"success",data:{msg:`img ${req.body} has been deleted`}})
            console.log('image deleted')
        }
    })
   
}

export {create, get, deleteImage}