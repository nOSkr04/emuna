// 

import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const getAllergy = async () => {
  const res = await httpRequest.get("/allergies");
  return res.data;
};