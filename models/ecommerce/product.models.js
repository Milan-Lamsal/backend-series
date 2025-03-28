// Product will have categories so need to give reference
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    prodcutImage:{
      type:String,
    },
    price:{
      type:Number,
      default:0,
    },
    stock:{
      type:String,
      default:0,
    }, // Important each product belongs to each category 
    {
      category:{
        type:mongoose.Schema.Types.ObjectId, // Type: Mongoose Schema dena aur Types dena aur muje ObjectID chaiye 
        ref:"Category", // brought from category.models.js from the end of export after model
        required:true,
      },
      Owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", // brought from user.modes.js from the end of export after model
      }

    }
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema); // ('Product', productSchema);this lines says make this product on the basis of productSchema

//Note : In array order matter while in Object order does not matters

//Note-> MongoDb is strong database you can put image in the form of buffer format but we should not keep it cus its makes database heavy and it is not built to store buffer value like image,pdf usually these images, pdf are kept in the SERVER in different folder, and the public URL is brought to DB or use Third Party Services like AWS  bucket you add image and in response SDK it give a URL which is public and store in DB  (cloudanary) where you can put videos, photos, upload and in response yout get URL (URL - String )
