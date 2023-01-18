import { IDrug } from "../interfaces/IDrug";
import { IMedical } from "../interfaces/IMedical";
import { BaseModel } from "./BaseModel";

export class Medical extends BaseModel implements IMedical {
  title?: string | null;
  id?: string | null;
  data: IDrug[];
  constructor ({ title, id,  data }: IMedical) {
    super();
    this.title = title;
    this.id = id;
    this.data = data;
  }

  static fromJson (json: IMedical) {
    return new Medical(json);    
  }
}