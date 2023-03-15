import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

export function validateProductName(
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response {
  const { name } = req.body;

  if (!name) return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  if (typeof name !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE)
      .json({ message: '"name" length must be at least 3 characters long' });
  }

  return next();
}

export function validateProductAmount(
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response {
  const { amount } = req.body;

  if (!amount) return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  if (typeof amount !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }

  return next();
}