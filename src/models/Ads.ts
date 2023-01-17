import { IAds } from "../interfaces/IAds";

import { BaseModel } from "./BaseModel";

export class Ads extends BaseModel implements IAds {
  _id: string;
  photo: string;
  name?: string | null;


  constructor ({ name, _id, photo,  }: IAds) {
    super();
    this.name = name;
    this._id = _id;
    this.photo = photo;
   
  }

  static fromJson (json: IAds) {
    return new Ads(json);    
  }
}