import { Document, Query, Schema, model } from 'mongoose';
import { IAddress, IName, IProduct, IUser, IUserModel } from './user.interface';
import bcrypt from 'bcrypt';

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
const userSchema = new Schema<IUser>({
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

// hassing password before inserting into DB
userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error: any) {
    next(error);
  }
});
//After saving data exclude password
userSchema.post('save', function (doc, next) {
  if (doc.password) {
    const noPassDoc: Omit<IUser, 'password'> & { password?: string } = {
      ...doc.toObject(),
      password: undefined,
    };

    // Update the original document with the new object
    Object.assign(doc, noPassDoc);
  }
  next();
});
// hassing password when updating
userSchema.pre('findOneAndUpdate', async function (this: any, next) {
  try {
    // console.log('Pre Middleware ===>', this._update);
    this._update.password = await bcrypt.hash(this._update.password, 10);
    next();
  } catch (error: any) {
    return next(error);
  }
});
// exclude password field for all find query
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.select('-password');
  next();
});

userSchema.statics.isUserExists = async function (userId): Promise<boolean> {
  const existingUser = await User.findOne({ userId });
  return existingUser ? true : false;
};
export const User = model<IUser, IUserModel>('User', userSchema);
