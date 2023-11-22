import { Schema, model } from 'mongoose';
import { IAddress, IName, IUser } from '../interfaces/user.interface';

const nameSchema = new Schema<IName>({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  country: { type: String, trim: true, required: true },
});

// user schema
const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, trim: true },
  username: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  fullName: nameSchema,
  age: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: addressSchema,
});

export const User = model<IUser>('User', userSchema);
