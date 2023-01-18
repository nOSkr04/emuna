import { IDrug } from "../interfaces/IDrug";
import { BaseModel } from "./BaseModel";

export class Drug extends BaseModel implements IDrug {
  id: number | null;
  drug: string | null;
  when: string | null;
  isSkip: boolean | null;
  much: number | null;
  isDone: boolean | null;
  bgColor: string | null;
  icon: string | null;
  constructor({ id, drug, when, isSkip, much, isDone, bgColor, icon }: IDrug) {
    super();
    this.id = id;
    this.drug = drug;
    this.when = when;
    this.isSkip = isSkip;
    this.much = much;
    this.isDone = isDone;
    this.bgColor = bgColor;
    this.icon = icon;
  }

  static fromJson(json: IDrug) {
    return new Drug(json);
  }
}
