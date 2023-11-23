import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

// create a new user
const createUser = async (user: IUser): Promise<IUser | null> => {
  // create a new user into the database
  const result = await User.create(user);
  return result;
};
//get all users
const getUsers = async (): Promise<IUser[]> => {
  const result = await User.find({});
  return result;
};
//get single user
const getUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOne({ userId });
  return result;
};
//Update user
const updateUser = async (
  userId: number,
  data: Partial<IUser>,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ userId }, data, { new: true });
  return result;
};
// Delete user
const deleteUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};
export const UserServices = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
