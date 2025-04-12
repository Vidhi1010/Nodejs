import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      passward: {
        type: String,
        required: [true, 'passward is required'],
      },
}, { timestamps: true })


export const User = mongoose.model('User', userSchema)