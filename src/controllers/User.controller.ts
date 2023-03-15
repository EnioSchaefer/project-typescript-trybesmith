import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import statusCodes from '../utils/statusCodes';
import UserService from '../services/User.service';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secret';

export default class UserController {
  constructor(private service = new UserService()) { }

  public insertUser = async (req: Request, res: Response) => {
    const userData = req.body;

    const id = await this.service.insertUser(userData);
    const { password, ...userWithoutPassword } = userData;
    const newObject = { ...userWithoutPassword, ...id };
    
    const token = jwt.sign({ payload: newObject }, secret, { algorithm: 'HS256', expiresIn: '7d' });
    
    return res.status(statusCodes.CREATED).json({ token });
  };

  public userLogin = async (req: Request, res: Response) => {
    const loginData = req.body;

    const userData = await this.service.userLogin(loginData);
    console.log(userData);
    
    if (!userData.loginStatus) {
      return res.status(statusCodes.UNAUTHORIZED).json(
        { message: 'Username or password invalid' },
      );
    }

    const { id, username } = userData;
    const tokenData = { id, username };

    const token = jwt.sign({ payload: tokenData }, secret, { algorithm: 'HS256', expiresIn: '7d' });

    return res.status(statusCodes.OK).json({ token });
  };
}