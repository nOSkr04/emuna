import { IMedicine } from "../interfaces/IMedicine";

export class Medicine implements IMedicine {
  _id: string;
  when?: string;
  quantity?: string;
  status?: "created" | "skipped" | "drinked";
  medicine?: string;
  icon?: string;
  color?:string


  constructor({
    _id,
   when,
   quantity,
   status,
   medicine,
   icon,
   color
  }: IMedicine) {
    this._id = _id;
    this.when = when;
    this.quantity = quantity;
    this.status = status;
    this.medicine = medicine;
    this.icon = icon;
    this.color = color;
   
  }

  static fromJson(json: IMedicine) {
    return new Medicine(json);
  }
}
