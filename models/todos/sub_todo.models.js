import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.ObjectId, // types plural , ObjectId O capital I capital
      ref: 'User',
    },
  },
  { timestamps: true }
); // expect object

export const SubTodo = mongoose.model('SubTodo', subTodoSchema); // const SubTodo and other SubTodo make sure its like same not necessary but make it same

// How to organize and structre the data
