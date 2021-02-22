import useSWR from 'swr'

import api from '@/services/api'

import { ToolsInterface } from '@/models/tools'

export function useFetch(url: string): any {
  const { data, error, mutate } = useSWR<ToolsInterface[]>(url, async url => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}
