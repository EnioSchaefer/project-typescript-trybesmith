import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

export function validateUserUsername(
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response {
  const { username } = req.body;

  if (!username) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  return next();
}

export function validateUserVocation(
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response {
  const { vocation } = req.body;

  if (!vocation) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"vocation" is required' });
  }
  if (typeof vocation !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }

  return next();
}

export function validateUserLevel(
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response {
  const { level } = req.body;

  if (!level && level !== 0) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(statusCodes.UNPROCESSABLE).json({ message: '"level" must be a number' });
  }
  if (level < 1) {
    return res.status(statusCodes.UNPROCESSABLE)
      .json({ message: '"level" must be greater than or equal to 1' });
  }

  return next();
}

export function validateUserPassword(
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response {
  const { password } = req.body;

  if (!password) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(statusCodes.UNPROCESSABLE)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  return next();
}