import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('Successfully connected');
  } catch (error) {
    throw new Error('Connection failed!');
  }
};

export default connect;
