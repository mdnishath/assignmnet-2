import { userNotFound } from '../../lib';
import { IUser } from './user.interface';
import { User } from './user.model';

// create a new user
const createUser = async (user: IUser): Promise<IUser | null> => {
  // create a new user into the database
  const result = await User.create(user);
  return result;
};
//get all users
const getUsers = async (): Promise<IUser[]> => {
  const result = await User.find({}).select(
    'userId username fullName.firstName fullName.lastName age email address.street address.city address.country',
  );
  return result;
};
//get single user
const getUser = async (userId: number): Promise<IUser | null> => {
  // console.log(await User.isUserExists(userId));

  if (await User.isUserExists(userId)) {
    const result = await User.findOne({ userId });
    return result;
  } else {
    throw userNotFound();
  }
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
