import { IUser } from '../interfaces/user.interface';
import { User } from '../models/user.model';

// create a new user
const createUser = async (user: IUser): Promise<IUser | null> => {
  // create a new user into the database
  const result = await User.create(user);
  return result;
};
//get all users
const getUsers = () => {};
//get single user
const getUser = () => {};
//Update user
const updateUser = () => {};
// Delete user
const deleteUser = () => {};
export const UserServices = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
