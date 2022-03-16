import React from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'

import { Card, Col, Row, Typography } from 'antd'

const { Text } = Typography

export const MovieInfo = ({ data, ...props }) => (
  <Card style={{ width: '100%', height: '100%' }} {...props}>
    <Text className='primary-color' style={{ fontSize: '20px' }}>
      ficha técnica
    </Text>

    <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
      <Col xs={24} sm={12} style={{ display: 'flex', flexDirection: 'column' }}>
        <Text style={{ marginBottom: '8px' }}>diretor</Text>

        <Text className='normal-font'>{data?.director}</Text>
      </Col>

      <Col xs={24} sm={12} style={{ display: 'flex', flexDirection: 'column' }}>
        <Text style={{ marginBottom: '8px' }}>produtores</Text>

        <Text className='normal-font'>{data?.producer}</Text>
      </Col>

      <Col span={24} style={{ display: 'flex', flexDirection: 'column' }}>
        <Text style={{ marginBottom: '8px' }}>lançamento</Text>

        <Text className='normal-font'>
          {moment(data?.release_date, 'YYYY-MM-DD').format('DD/MM/YYYY')}
        </Text>
      </Col>
    </Row>
  </Card>
)

MovieInfo.propTypes = {
  data: PropTypes.object
}
