import { Request, Response } from 'express';
import statusCodes from '../utils/statusCodes';
import ProductService from '../services/Product.service';

export default class ProductController {
  constructor(private service = new ProductService()) { }

  public insertProduct = async (req: Request, res: Response) => {
    const product = req.body;
    
    const result = await this.service.insertProduct(product);
    
    return res.status(statusCodes.CREATED).json(result);
  };
}