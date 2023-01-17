import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const getAds = async () => {
  const res = await httpRequest.get("/ads");
  return res.data;
};
export const getAdDetail = async (id:string) => {
  const res = await httpRequest.get("/ads/" + id);
  return res.data;
};