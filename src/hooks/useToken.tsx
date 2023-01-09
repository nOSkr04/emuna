import { useSelector } from "react-redux";
import { IAuth } from "../interfaces/IAuth";

const useToken = (): string | null => {
  const { accessToken } = useSelector((state: { auth: IAuth }) => state.auth);

  return accessToken;
};

export { useToken };
