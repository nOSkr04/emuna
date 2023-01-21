import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const postSchedule = async (
  medicineName: string,
  medicine: string,
  icon: string,
  color: string,
  timeArray: string[] | null ,
  days: string[] | null,
  quantity: string[],
  when: string,
  endDate: Date,
  startDate: Date,
) => {
  console.log( days,  );
  const res = await httpRequest.post("/schedules", {
    medicineName: medicineName,
    medicine    : medicine,
    icon        : icon,
    color       : color,
    time        : timeArray,
    day         : days,
    quantity    : quantity,
    when        : when,
    endDate     : endDate,
    startDate   : startDate,
  });
  return res;
};
