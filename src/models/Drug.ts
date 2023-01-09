import { IDrug } from "../interfaces/IDrug";
import { IDrugData } from "../interfaces/IDrugData";
import { BaseModel } from "./BaseModel";

export class Drug extends BaseModel implements IDrug {
  id: string;
  title: string;
  data: IDrugData;
  constructor({ id, title,data  }: IDrug) {
    super();
    this.id = id;
    this.title = title;
    this.data = data;
   
  }

  static fromJson(json: IDrug) {
    return new Drug(json);
  }
}
