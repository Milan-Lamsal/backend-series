import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
// if in the model instead of Category if you write categories will mongoDB data base make more pluar ? like categorieses
//-> The answer is No MongoDB is intellegent so it can know which one is pluar so it stays same categories lowerCase and Pluar
