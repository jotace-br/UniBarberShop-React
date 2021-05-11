import useSWR from "swr";
import api from "./api";

export function useUser(url: string = "profile") {
  const { data } = useSWR(url, async (url) => {
    try {
      const response = await api.get(url);

      return response.data;
    } catch (e) {
      return e;
    }
  });

  return { data };
}
