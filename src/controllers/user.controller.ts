import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';
import { userSchemaValidation } from '../validations/user.validation';

// create user cotroller
const createUser = async (req: Request, res: Response) => {
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
    console.log(error);

    res.status(201).json({
      success: false,
      message: 'Internal error occurred',
      error,
    });
  }
};

export const UserControllers = {
  createUser,
};
