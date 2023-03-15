import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { validateUserUsername, validateUserVocation,
  validateUserLevel, validateUserPassword } from '../middlewares/validateUserBody';

const UserRouter = Router();

const controller = new UserController();

UserRouter.post(
  '/', 
  validateUserUsername,
  validateUserVocation,
  validateUserLevel,
  validateUserPassword,
  controller.insertUser,
);

export default UserRouter;
