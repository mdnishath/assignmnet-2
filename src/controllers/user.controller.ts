import { NextFunction, Request, Response } from 'express';
import { UserServices } from '../services/user.service';
import { userSchemaValidation } from '../validations/user.validation';

// create user cotroller
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // request driven data
    const user = await req.body;
    const validatedUserData = userSchemaValidation.parse(user);
    // call user service
    const data = await UserServices.createUser(validatedUserData);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data,
    });
  } catch (error: any) {
    next(error);
  }
};
// get users cotroller
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // call user service
    const data = await UserServices.getUsers();
    res.status(201).json({
      success: true,
      message: 'Users retrieved successfully',
      data,
    });
  } catch (error: any) {
    next(error);
  }
};
// get user cotroller
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // call user service
    const { userId } = req.params;
    const data = await UserServices.getUser(userId);
    //TODO: check if user exists using statice or instance method

    res.status(201).json({
      success: true,
      message: 'User retrieved successfully',
      data,
    });
  } catch (error: any) {
    next(error);
  }
};

export const UserControllers = {
  createUser,
  getUsers,
  getUser,
};
