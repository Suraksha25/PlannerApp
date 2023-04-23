const cloudinary=require("cloudinary").v2;
const multer=require("multer");
const {CloudinaryStorage}=require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name:"df5ewllq3",
    api_key:"977815892875997",
    api_secret:"MYHa2qz1rtSBOZR00LSBmRDUbP0"

})
//config cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"plannerapp",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }
})

//config multer
let multerobj=multer({storage:clStorage})

//export multer
module.exports=multerobj;