import connection from '../models/connection';
import ProductModel from '../models/Product.model';
import IProduct from '../interfaces/Product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async insertProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await this.model.insertProduct(name, amount);

    return result;
  } 
}