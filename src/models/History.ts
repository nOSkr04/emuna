import { IHistory } from "../interfaces/IHistory";
import { IMedicine } from "../interfaces/IMedicine";
import { BaseModel } from "./BaseModel";

export class History extends BaseModel implements IHistory {
  invited?: number | null;
  histories: [
    {
      _id: string;
      medicine: IMedicine[];
    },
  ];

  constructor({ invited, histories }: IHistory) {
    super();
    this.invited = invited;
    this.histories = histories;
  }

  static fromJson(json: IHistory) {
    return new History(json);
  }
}
