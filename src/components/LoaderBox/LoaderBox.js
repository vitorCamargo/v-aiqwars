import React from 'react'
import PropTypes from 'prop-types'

import { Row } from 'antd'

import { Loading } from 'components/Loading'

export const LoaderBox = () => (
  <Row
    align='middle'
    justify='center'
    className='ant-layout'
    style={{ height: '100vh' }}
  >
    <Loading style={{ fontSize: '90px' }} />
  </Row>
)

LoaderBox.propTypes = {
  children: PropTypes.node
}
