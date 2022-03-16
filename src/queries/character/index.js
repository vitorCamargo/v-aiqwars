import axios from 'axios'

import { useQuery } from 'react-query'

const URL = process.env.REACT_APP_BASE_URL

const buildParams = (filters = {}, page = 1) => {
  const { name = '' } = filters
  const params = []

  if (name) {
    params.push(['search', name])
  }

  if (page) {
    params.push(['page', page])
  }

  return params.length > 0 ? new URLSearchParams(params) : []
}

export const useQueryCharacters = (filters = {}, page = 1) =>
  useQuery(
    ['queryCharacters', filters, page],
    () =>
      axios
        .get(`${URL}/people`, {
          params: buildParams(filters, page)
        })
        .then(result => result.data),
    { refetchOnWindowFocus: false }
  )

export const useQueryCharacter = (id = '') =>
  useQuery(
    ['queryCharacter', id],
    () => axios.get(`${URL}/people/${id}`).then(result => result.data),
    { refetchOnWindowFocus: false, retry: false }
  )
