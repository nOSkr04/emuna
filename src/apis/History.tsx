import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const historiesDay = async (strDate : string) => {
  const res = await httpRequest.get(`/histories/day/${strDate}`);
  return res.data;
};
export const history = async (id : string) => {
  const res = await httpRequest.get(`/histories/${id}`);
  return res.data;
};