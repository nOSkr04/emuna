import { HttpRequest } from "../utils/aaa";

const httpRequest = new HttpRequest();

export const me = async () => {
  const res = await httpRequest.get("/products");
  return res.products;
};
