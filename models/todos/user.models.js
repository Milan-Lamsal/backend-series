import mongoose from 'mongoose';
//////////////////////////////// Making Model ////////////////////////////////////////////////////
//creating schema
const userSchema = new mongoose.Schema(
  // {
  //   username: String,
  //   email: String,
  //   isActive: Boolean,
  // }
  //Profession standard or approach
  //Validatation

  {
    // what are the data taking
    username: {
      // using object
      type: String,
      required: true, // this field has to be there
      unique: true, // for unique username
      lowercase: true,
    },
    email: {
      type: String,
      reqired: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true, //[true, 'password is required'] can accept array
    },
    //timestamp (Mongoose timestamp, createdAt, updatedAt)
  },
  { timestamps: true } // what time stamp at the end its its always plural timestamps not timestamp cus createdApp and UpdatedApp
);

export const User = mongoose.model('User', userSchema);
// in database its name gonna be users Not User with plural and lowercase
