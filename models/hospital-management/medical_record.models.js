import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
); // what name MedicalRecord , and on what basis medicalRecordSchema
