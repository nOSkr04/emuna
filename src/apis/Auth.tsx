import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const me = async () => {
  const res = await httpRequest.get("/users/me");
  return res.data;
};

export const login = async ( phone: string,password: string ) => {
  const res = await httpRequest.post("/users/login", { phone: phone,password: password });
  return res;
};