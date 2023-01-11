import { IUser } from "../interfaces/IUser";

export class User implements IUser {
  _id: string;
  auth: string;
  firstName: string | null;
  lastName: string | null;
  phone: string;
  role: string;
  birthDate: string | null;
  gender: string | null;
  weight:string | null;
  height:string | null;
  drugCount: number;


  constructor({
    _id,
    auth,
    role,
    phone,
    birthDate,
    firstName,
    lastName,
    gender,
    weight,
    height,
    drugCount,
  }: IUser) {
    this._id = _id;
    this.auth = auth;
    this.role = role;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
    this.drugCount = drugCount;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
