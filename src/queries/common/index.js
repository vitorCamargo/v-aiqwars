import axios from 'axios'

import { useQuery } from 'react-query'

export const useQueryFetch = (url = '') =>
  useQuery(
    ['queryFetch', url],
    () => axios.get(url).then(result => result.data),
    { refetchOnWindowFocus: false }
  )
