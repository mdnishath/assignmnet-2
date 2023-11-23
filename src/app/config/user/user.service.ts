import { IUser } from './user.interface';
import { User } from './user.model';

//create student into DB
const createUserIntoDB = async (userData: IUser) => {
  if (await User.isUserExist(userData.email)) {
    throw new Error(`User ${userData.email} already exists)`);
  }
  const user = new User(userData);
  const result = await user.save();
  return result;
};

// get a user from DB
const getUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
// get a all users from DB
const getAllUsersFromDB = async () => {
  const result = await User.find({});
  return result;
};

// Delete
const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUserFromDB,
  getAllUsersFromDB,
  deleteUserFromDB,
};
