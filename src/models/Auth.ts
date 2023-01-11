import { IAuth } from "../interfaces/IAuth";
import { IUser } from "../interfaces/IUser";
import { BaseModel } from "./BaseModel";

export class Auth extends BaseModel implements IAuth {
  username?: string | null;
  password?: string | null;
  token: string | null;
  user: IUser | null;

  constructor ({ username, password, token, user }: IAuth) {
    super();
    this.username = username;
    this.password = password;
    this.token = token;
    this.user = user;
  }

  static fromJson (json: IAuth) {
    return new Auth(json);    
  }
}