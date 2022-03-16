import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from 'antd'

import { Header } from 'components'

export const AppBar = ({ children }) => (
  <Layout style={{ minHeight: '100%' }}>
    <Header />

    <Layout.Content style={{ padding: '50px', marginTop: 100 }}>
      {children}
    </Layout.Content>
  </Layout>
)

AppBar.propTypes = {
  children: PropTypes.node
}
