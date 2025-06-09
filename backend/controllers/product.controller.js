
import {v2 as cloudinary} from 'cloudinary';
//function for add product


const addProduct= async (req,res)=>{
    try {
        const {name,description,price,category,subCategory,sizes,bestSeller} =req.body;

        // Getting the uploaded images from the request (if they exist)
        // Each image is stored as an array, so we take the first image using [0]
        const image1 = req.files.image1 &&  req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 &&  req.files.image4[0]

        // This line creates a new array called images that only includes the image files that were actually uploaded.
        const images=[image1,image2,image3,image4].filter((item)=>item !== undefined);

        let imagesUrl= await Promise.all(
            images.map(async (item)=>{
                let result  = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        console.log(name,description,price,category,subCategory,sizes,bestSeller);
        console.log(imagesUrl);

        res.json({});

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//function for list product
const listProduct= async (req,res)=>{
    
}


//function for removing product
const removeProduct= async (req,res)=>{
    
}

//function for single product info
const singleProduct= async (req,res)=>{
    
}

export {listProduct,addProduct,removeProduct,singleProduct}

