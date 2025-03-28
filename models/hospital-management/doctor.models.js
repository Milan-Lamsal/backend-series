import mongoose, { mongo } from "mongoose"
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: String,// for USD, Rupeese in the front Rs 1,80,000
    required: true,
  },
  qulifications: {
    type: String,
    required: true,
  },
  experienceInYears: {
    type: Number,
    default: 0,
  },
  worksInHopitals: [ ////as there is gonna be multiple hospitals so we gonna use Array 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  ],

}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema)
