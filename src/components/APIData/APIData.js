import { memo } from 'react'
import PropTypes from 'prop-types'

import { useQueryFetch } from 'queries/common'

export const APIData = memo(({ url, field }) => {
  const { data, isFetching } = useQueryFetch(url)

  if (isFetching) return 'CARREGANDO...'

  return data[field] || ''
})

APIData.propTypes = {
  url: PropTypes.string,
  field: PropTypes.string
}
