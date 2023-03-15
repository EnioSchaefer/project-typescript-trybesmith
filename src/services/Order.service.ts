import connection from '../models/connection';
import OrderModel from '../models/Order.model';
import IOrder from '../interfaces/Order.interface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const orders = await this.model.getAllOrders();

    return orders;
  }

  public async insertOrders(productsIds: number[], userId: number): Promise<object> {
    const result = await this.model.insertOrders(productsIds, userId);

    return result;
  }
}