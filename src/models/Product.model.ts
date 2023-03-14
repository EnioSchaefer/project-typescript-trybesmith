import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/Product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertProduct(name: string, amount: string): Promise<IProduct> {
    const result = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.products (name, amount) 
      VALUES (?, ?)`,
      [name, amount],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, name, amount };
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    return products as IProduct[];
  }
}
