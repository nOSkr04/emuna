import { useState } from "react";
import { useSelector } from "react-redux";
import swr, { KeyedMutator, SWRConfiguration } from "swr";
import { IAuth } from "../interfaces/IAuth";
import { BaseModel } from "../models/BaseModel";

const useSWRToken = <T extends BaseModel>(
  key: string | null,
  api: () => Promise<T>,
  options: SWRConfiguration = {},
): {
  data: T | null;
  error: unknown;
  mutate: KeyedMutator<T>;
  isLoading: boolean;
  isInitialLoading: boolean;
} => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const { accessToken } = useSelector((state: { auth: IAuth }) => state.auth);

  const { data, error, mutate } = swr(key === null ? null : [key, accessToken], api, {
    shouldRetryOnError: false,
    ...options,
  });

  if (isInitialLoading && (data || error)) {
    setIsInitialLoading(false);
  }

  return { data: data || null, isInitialLoading, isLoading: !data && !error, error, mutate };
};

export { useSWRToken };
