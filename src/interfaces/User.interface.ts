export interface IUser {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  loginStatus? : boolean;
}

export interface IUserLogin {
  username: string;
  password: string;
}
