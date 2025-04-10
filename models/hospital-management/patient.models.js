import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  diagonsedWith:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true,
  },
  bloodGroup:{
    type:Number,
    required:true,
  },
  gender:{
    type:Number,
    enum:["M", "F", "O"],
    required:true,
  },
  addmittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);
