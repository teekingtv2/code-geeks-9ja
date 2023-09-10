import mongoose from 'mongoose';

const { Schema } = mongoose;

const openCourseSchema = new Schema(
  {
    expiry: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    curriculum: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.OpenCourse || mongoose.model('OpenCourse', openCourseSchema);
