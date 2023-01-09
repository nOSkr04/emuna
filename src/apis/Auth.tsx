import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const me = async () => {
  const res = await httpRequest.get("/user/me");
  return res;
};

export const login = async ( username: string,password: string ) => {
  const res = await httpRequest.post("/auth/login", { username: username,password: password });
  return res;
};