import { Document, Schema, model } from 'mongoose';
import { IAddress, IName, IProduct, IUser } from './user.interface';

const nameSchema = new Schema<IName>({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  country: { type: String, trim: true, required: true },
});
const productSchema = new Schema<IProduct>({
  productName: { type: String, trim: true, required: true },
  price: { type: Number, trim: true, required: true },
  quantity: { type: Number, trim: true, required: true },
});

// user schema
const userSchema = new Schema<IUser & Document>({
  userId: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
    immutable: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: { type: String, required: true, trim: true },
  fullName: nameSchema,
  age: { type: Number, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: addressSchema,
  orders: { type: [productSchema], default: [] },
});

export const User = model<IUser>('User', userSchema);
