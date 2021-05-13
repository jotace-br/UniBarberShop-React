import useSWR from "swr";
import api from "../services/api";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {
      refreshInterval: 10000,
    }
  );

  return { data, error, mutate };
}
