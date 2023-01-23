// 

import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const getChronicDeases = async () => {
  const res = await httpRequest.get("/diseases");
  return res.data;
};