import { Schema, model } from 'mongoose';
import { IAddress, IName, IUser } from '../interfaces/user.interface';
import { orderSchema } from './order.model';

const nameSchema = new Schema<IName>({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, trim: true },
  city: { type: String, trim: true },
  country: { type: String, trim: true },
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
  isActive: { type: Boolean },
  hobbies: { type: [String], required: true },
  address: addressSchema,
  orders: orderSchema,
});

export const User = model<IUser>('User', userSchema);
