import { Schema, model } from 'mongoose';
import { IAddress, IUser, IUserModel, Iname } from './user.interface';

const nameSchema = new Schema<Iname>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new Schema<IUser>({
  name: nameSchema,
  email: { type: String, required: true, unique: true, trim: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
    },
  },
  phone: { type: String, required: true, trim: true },
  address: addressSchema,
  profileImage: { type: String },
});

// TODO:
userSchema.statics.isUserExist = function (email: string) {
  return this.findOne({ email });
};

export const User = model<IUser, IUserModel>('User', userSchema);
