import express from 'express';
import { UserControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getUsers);

export const UserRoute = router;
