import React, { memo } from 'react'

import PropTypes from 'prop-types'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      retry: false,
      staleTime: 50,
      refetchOnMount: false,
      refetchInterval: false,
      refetchOnWindowFocus: false
    }
  }
})

export const ReactQueryProvider = memo(({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
))

ReactQueryProvider.propTypes = {
  children: PropTypes.node
}
