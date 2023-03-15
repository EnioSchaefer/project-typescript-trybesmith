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
    jwt.verify(authorization, secret);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
}
