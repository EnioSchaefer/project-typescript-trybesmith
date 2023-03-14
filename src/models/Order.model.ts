import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      LEFT JOIN Trybesmith.products AS p
      ON p.order_id = o.id
      GROUP BY o.id`,
    );
    return orders as IOrder[];
  }
}