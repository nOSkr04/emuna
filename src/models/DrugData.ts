import { IDrugData } from "../interfaces/IDrugData";
import { BaseModel } from "./BaseModel";



export class DrugData extends BaseModel implements IDrugData {
  id  : number;
  drug: string;
  when: string;
  isSkip: boolean;
  much: number;
  isDone: boolean;

  constructor({ drug, when, isSkip, much, isDone,id }: IDrugData) {
    super();
    this.id = id;
    this.drug = drug;
    this.when = when;
    this.isSkip = isSkip;
    this.much = much;
    this.isDone = isDone;
  }

  static fromJson(json: IDrugData) {
    return new DrugData(json);
  }
}
