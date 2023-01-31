import { useSWRConfig } from "swr";
import { useToken } from "./useToken";

const useMutate = () => {
  const { mutate } = useSWRConfig();

  const token = useToken();

  return (key: string, ...args: any | undefined) => {
    return mutate([key, token], ...args);
  };
};

export { useMutate };
