import mongoose from "mongoose"
const hospitalSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  addressLine1:{
    type:String,
    required:true,
  },
  addressLine2:{
    type:String,
  },
  city:{
    type:String,
    required:true,
  },
  pincode:{
    type:String, // put in string cus some other countries has String 
    required:true,
  },
  specializedIn:[ // it is also an Array
    {
      type:String,
    },
  ],
  likes:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  ]

  ]
},{timestamps= true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)
