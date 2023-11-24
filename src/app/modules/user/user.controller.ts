import { Request, Response } from 'express';
import { UserServices } from './user.service';
// import { userSchemaValidation } from './user.validation';

// create user cotroller
const createUser = async (req: Request, res: Response) => {
  try {
    // request driven data
    const user = await req.body;
    // const validatedUserData = userSchemaValidation.parse(user);
    // call user service
    const data = await UserServices.createUser(user);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
// get users cotroller
const getUsers = async (req: Request, res: Response) => {
  try {
    // call user service
    const data = await UserServices.getUsers();
    res.status(201).json({
      success: true,
      message: 'Users retrieved successfully',
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
// get user cotroller
const getUser = async (req: Request, res: Response) => {
  try {
    // call user service
    const { userId } = req.params;
    const data = await UserServices.getUser(parseInt(userId));
    //TODO: check if user exists using statice or instance method
    res.status(201).json({
      success: true,
      message: 'User retrieved successfully',
      data,
    });
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
// update user cotroller
const updateUser = async (req: Request, res: Response) => {
  try {
    // call user service

    const { userId } = req.params;
    const _reqData = await req.body;
    const data = await UserServices.updateUser(parseInt(userId), _reqData);
    //TODO: check if user exists using statice or instance method
    res.status(201).json({
      success: true,
      message: 'User updated successfully',
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
// Delete user cotroller
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await UserServices.deleteUser(parseInt(userId));

    //TODO: check if user exists using statice or instance method
    res.status(201).json({
      success: true,
      message: 'User deleted successfully',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};

const updateUserOrder = async (req: Request, res: Response) => {
  try {
    // call user service

    const { userId } = req.params;
    const _product = await req.body;
    await UserServices.updateUserOrder(parseInt(userId), _product);

    //TODO: check if user exists using statice or instance method
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
// get orders cotroller
const getOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // call user service
    const data = await UserServices.getOrders(parseInt(userId));
    res.status(201).json({
      success: true,
      message: 'Order fetched successfully!',
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
// get total price controller
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // call user service
    const data = await UserServices.getTotalPrice(parseInt(userId));
    res.status(201).json({
      success: true,
      message: 'Total price calculated successfully!',
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: {
        code: error?.error?.code,
        description: error?.message,
      },
    });
  }
};
export const UserControllers = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateUserOrder,
  getOrders,
  getTotalPrice,
};
