import { Request, Response } from 'express';
import { UserServices } from './user.service';

//create user
const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    // will call to user service
    const result = await UserServices.createUserIntoDB(user);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// get a single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserServices.getUserFromDB(userId);
    res.status(201).json({
      success: true,
      message: 'User retrive successfully',
      data: user,
    });
  } catch (error) {
    return res.status(201).json({
      success: true,
      message: 'Internal error occurred',
      error: error,
    });
  }
};
// get multiple users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserServices.getAllUsersFromDB();
    res.status(201).json({
      success: true,
      message: 'User retrive successfully',
      data: user,
    });
  } catch (error) {
    return res.status(201).json({
      success: true,
      message: 'Internal error occurred',
      error: error,
    });
  }
};

// delete single user by id
const deleteSingleUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteUserFromDB(userId);
    res.status(201).json({
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (error) {
    return res.status(201).json({
      success: true,
      message: 'Internal error occurred',
      error: error,
    });
  }
};
export const UserControler = {
  createUser,
  getSingleUser,
  getAllUsers,
  deleteSingleUserById,
};
