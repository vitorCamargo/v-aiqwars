import React from 'react'
import PropTypes from 'prop-types'

import { Card, Row, Typography } from 'antd'

const { Text } = Typography

export const MovieSynopsis = ({ data, ...props }) => (
  <Card style={{ width: '100%' }} {...props}>
    <Text className='primary-color' style={{ fontSize: '20px' }}>
      sinopse
    </Text>

    <Row className='normal-font' style={{ marginTop: '24px' }}>
      {data?.opening_crawl}
    </Row>
  </Card>
)

MovieSynopsis.propTypes = {
  data: PropTypes.object
}
