import React from 'react'

import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import { LayoutProvider } from './layout'
import { ReactQueryProvider } from './reactQuery'

const Providers = ({ children }) => (
  <LayoutProvider>
    <BrowserRouter>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </BrowserRouter>
  </LayoutProvider>
)

export default Providers

Providers.propTypes = {
  children: PropTypes.node
}
