//Interesting field
import mongoose, { mongo } from 'mongoose';
//Minimodels or Schema 
const orderItemsSchema= new mongoose.Schema({
  productId:{ //MongoDB generate the unique ID for individual product (ProductId will be reference of Product )
    type:mongoose.Schema.Types.ObjectId,
    ref="Product"
  },
  quantity:{
    type:Number,
    required:true,
  }
})

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems:{ // For individual order, quantity we make mini model or schema above 
      type:[orderItemsSchema]
    },
    address:{
      type:String,
      required:true,
    },
    //Order state -> Order Process, Ship, Delivered can't put in string we don't want to give the access to user like some write delivered some write delievere, but need to make restrictive field for the status and it has to be those like in airplane booking system, there will be three seat, Ailse, Middle and Window (only three and Ailse should be Alise need to be same spelling so it is defined in data modeling)
    status:{
      type:String,
      enum:["PENDING", "CANCELLED", "DELIVERED"], // ENUM = means choices 
      default: "PENDING ",
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
