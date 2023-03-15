import { IUser, IUserLogin } from '../interfaces/User.interface';
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

  public async userLogin(loginData: IUserLogin): Promise<IUser> {
    const { username, password } = loginData;
    const userData = await this.model.userLogin(username);
    const userLoginData = { loginStatus: true, ...userData };

    if (!userData || password !== userData.password) {
      userLoginData.loginStatus = false;
    }

    return userLoginData;
  }
}