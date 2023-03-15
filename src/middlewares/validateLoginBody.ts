import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

export default function validateLoginBody(
  req: Request, 
  res: Response, 
  next: NextFunction,
): void | Response {
  const { username, password } = req.body;

  if (!username) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"password" is required' });
  }

  return next();
}