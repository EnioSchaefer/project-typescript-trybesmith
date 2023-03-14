import IUser from '../interfaces/User.interface';
import connection from '../models/connection';
import UserModel from '../models/User.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async insertUser(userData: IUser): Promise<object> {
    const { username, vocation, level, password } = userData;
    const result = await this.model.insertUser(username, vocation, level, password);

    return result;
  }
}