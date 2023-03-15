import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import OrderService from '../services/Order.service';

export default class OrderController {
  constructor(private service = new OrderService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.service.getAllOrders();

    return res.status(statusCodes.OK).json(orders);
  };

  public insertOrders = async (req: Request, res: Response) => {
    const { userData: { payload }, productsIds } = req.body; 
    const { id: userId } = payload;
    
    const result = await this.service.insertOrders(productsIds, userId);
    
    return res.status(statusCodes.CREATED).json(result);
  };
}