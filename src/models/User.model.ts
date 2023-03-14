import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertUser(username: string, vocation: string, level: number, password: string)
    : Promise<object> {
    const result = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.users ( username, vocation, level, password )
      VALUES ( ?, ?, ?, ? )
      `, [username, vocation, level, password]);
      
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId };
  }
}