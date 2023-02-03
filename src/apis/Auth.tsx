import { HttpRequest } from "../utils";

const httpRequest = new HttpRequest();

export const me = async () => {
  const res = await httpRequest.get("/users/me");
  return res.data;
};

export const deleteAccount = async (id:string) => {
  const res = await httpRequest.del(`/users/${id}`);
  return res.data;
};

export const otpVerify = async (phone: string) => {
  const res = await httpRequest.post("/users/send", { phone: phone });
  return res;
};

export const checkOtp = async (phone: string, random:string) => {
  const res = await httpRequest.post("/users/checkOTP", { phone: phone,random: random });
  return res;
};
export const login = async (phone: string, password: string, token: string) => {
  const res = await httpRequest.post("/users/login", { phone: phone, password: password, expoPushToken: token,isNotificationOn: true });
  return res;
};
// phone, password,token, firstName && firstName, height && height, weight && weight, gender && gender,
export const register = async (
  phone: string,
  password: string,
  token: string,
  firstName?: string,
  height?: string,
  weight?: string,
  gender?: string,
) => {
  const res = await httpRequest.post("/users/register", {
    phone           : phone,
    password        : password,
    expoPushToken   : token,
    firstName       : firstName,
    height          : height,
    weight          : weight,
    gender          : gender,
    isNotificationOn: true
  });
  return res;
};
export const logout = async () => {
  const res = await httpRequest.get("/users/logout");
  return res;
};

export const edit = async (values: { firstName?: string | null; height?: string | null; weight?: string | null; gender?: string | null }) => {
  const res = await httpRequest.put("/users/edit", values);
  return res;
};

export const editAllergy = async (values: { isAllergy: boolean, allergy: string[]  }) => {
  const res = await httpRequest.put("/users/edit", values);
  return res;
};

export const editChronicDesease = async (values: { isChronicDesease: boolean, chronicDisease: string[]  }) => {
  const res = await httpRequest.put("/users/edit", values);
  return res;
};

export const editRegularMedicine = async (values: { isRegularMedicine: boolean, }) => {
  const res = await httpRequest.put("/users/edit", values);
  return res;
};
export const editInjury = async (values: { isInjury: boolean, }) => {
  const res = await httpRequest.put("/users/edit", values);
  return res;
};
export const editSurgery = async (values: { isSurgery: boolean, }) => {
  const res = await httpRequest.put("/users/edit", values);
  return res;
};