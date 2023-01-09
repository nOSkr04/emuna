import { IUser } from "../interfaces/IUser";

export class User implements IUser {
  _id: string;
  auth: string;
  userType: string;
  phone: string;
  drugCount: number;
  birthDate: Date;
  firstName: string;
  lastName: string;

  constructor({
    _id,
    auth,
    userType,
    phone,
    drugCount,
    birthDate,
    firstName,
    lastName,
  }: IUser) {
    this._id = _id;
    this.auth = auth;
    this.userType = userType;
    this.phone = phone;
    this.drugCount = drugCount;
    this.birthDate = birthDate;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
