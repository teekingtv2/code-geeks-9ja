import mongoose from 'mongoose';

const { Schema } = mongoose;

const applicantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Inactive',
    },
    trainingMedium: {
      type: String,
      required: true,
    },
    connection: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema);
