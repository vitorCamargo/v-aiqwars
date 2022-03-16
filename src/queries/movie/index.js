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

export const useQueryMovies = (filters = {}, page = 1) =>
  useQuery(
    ['queryMovies', filters, page],
    () =>
      axios
        .get(`${URL}/films`, {
          params: buildParams(filters, page)
        })
        .then(result => result.data),
    { refetchOnWindowFocus: false }
  )

export const useQueryMovie = (id = '') =>
  useQuery(
    ['queryMovie', id],
    () => axios.get(`${URL}/films/${id}`).then(result => result.data),
    { refetchOnWindowFocus: false, retry: false }
  )
