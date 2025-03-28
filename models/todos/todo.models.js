import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      //relation with user so if you need a relation in a database model then, need to take care of 2 things 1->" special type"  and 2 -> "reference"

      type: mongoose.Schema.Types.ObjectId, // (This is a type like string, boolean) and it should be Types not Type

      ref: 'User', // this line has to be referenced after type and export const User = mongoose.model('User', userSchema); should be same User User from export  we use the Model User
    },
    subTodos: [
      // Array of sub_todo
      {
        type: mongoose.Schema.Types.ObjectId, // Types.ObjectId not Type
        ref: 'SubTodo', // should be Model (SubTodo)
      },
    ],
  },
  { timestamps: true }
); //ts always plural timestamps not timestamp cus createdApp and UpdatedApp

export const Todo = mongoose.model('Todo', todoSchema); // in database its name gonna be todos with plural and lowercase
