import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secret';

export default function authorizeToken(
  req: Request, 
  res: Response, 
  next: NextFunction,
): void | Response {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const userData = jwt.verify(authorization, secret);
    req.body.userData = userData;
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return next();
}
