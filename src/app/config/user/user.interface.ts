import { Document, Model } from 'mongoose';
export interface Iname {
  firstName: string;
  middleName?: string;
  lastName?: string;
}

export interface IAddress {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface IUser extends Document {
  name: Iname;
  email: string;
  gender: 'male' | 'female';
  phone: string;
  address: IAddress;
  profileImage?: string | null;
}
// UserModle
export interface IUserModel extends Model<IUser> {
  isUserExist(email: string): Promise<IUser | null>;
}
