import { IUser } from "../interfaces/IUser";

export class User implements IUser {
  _id: string;
  auth: string;
  userType: string;
  phone: number;
  drugCount?: number | null;
  birthDate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  gender?: "male" | "female" | "other" | null;
  height?: string | null;
  weight?: string | null
  constructor({ _id, auth, userType, phone, drugCount, birthDate, firstName, lastName, gender, height, weight }: IUser) {
    this._id = _id;
    this.auth = auth;
    this.userType = userType;
    this.phone = phone;
    this.drugCount = drugCount;
    this.birthDate = birthDate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
