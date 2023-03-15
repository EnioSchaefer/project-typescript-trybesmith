import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces/User.interface';

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

  public async userLogin(username: string): Promise<IUser> {
    const [[userData]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );
    
    return userData as unknown as IUser;
  }
}