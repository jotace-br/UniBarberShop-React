import useSWR from 'swr'
import api from 'services/api'

export function useFetchWithNoRefresh<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async url => {
      const response = await api.get(url)
      return response.data
    },
    {
      revalidateOnFocus: false,
    },
  )

  return { data, error, mutate }
}
