import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const getDrugs = async () => {
  const res = await httpRequest.get("/drugs?limit=10000");
  return res.data;
};

export const getDrugDetail = async (id: string) => {
  const res = await httpRequest.get(`/drugs/${id}`);
  return res.data;
};
export const getBarcodeDrug = async (barcode: string) => {
  const res = await httpRequest.get(`/drugs?barcode=${barcode}`);
  return res.data;
};