// import { Model } from 'mongoose';

import { Document } from 'mongoose';
import { Model } from 'mongoose';

export interface IName {
  firstName: string;
  lastName: string;
}
export interface IAddress {
  street: string;
  city: string;
  country: string;
}

export interface IProduct {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser extends Document {
  readonly userId: number;
  username: string;
  password: string;
  fullName: IName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
  orders?: IProduct[];
}
// UserModle
export interface IUserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: number): boolean;
}

// user not found
export interface IUserNotFound {
  success: boolean;
  message: string;
  error: {
    code: number;
    description: string;
  };
}
