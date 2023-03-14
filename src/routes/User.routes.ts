import { Router } from 'express';
import UserController from '../controllers/User.controller';

const UserRouter = Router();

const controller = new UserController();

UserRouter.post('/', controller.insertUser);

export default UserRouter;
