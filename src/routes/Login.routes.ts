import { Router } from 'express';
import UserController from '../controllers/User.controller';
import validateLoginBody from '../middlewares/validateLoginBody';

const LoginRouter = Router();

const controller = new UserController();

LoginRouter.post('/', validateLoginBody, controller.userLogin);

export default LoginRouter;
