import { ISchedule } from "../interfaces/ISchedule";
import { BaseModel } from "./BaseModel";

export class Schedule extends BaseModel implements ISchedule {
  medicineName: string;
  medicine: string;
  icon: string;
  color: string;
  timeArray: string[];
  days: string[];
  quantity: string[];
  when: string;
  endDate: Date;
  startDate: Date;
  constructor({ medicineName, medicine, icon, color, timeArray, days, quantity, when, endDate, startDate }: ISchedule) {
    super();
    this.medicineName = medicineName;
    this.medicine = medicine;
    this.icon = icon;
    this.color = color;
    this.timeArray = timeArray;
    this.days = days;
    this.quantity = quantity;
    this.when = when;
    this.endDate = endDate;
    this.startDate = startDate;
  }

  static fromJson(json: ISchedule) {
    return new Schedule(json);
  }
}
