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
export interface IUser {
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
