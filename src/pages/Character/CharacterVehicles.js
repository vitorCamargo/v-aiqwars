import React from 'react'
import PropTypes from 'prop-types'

import { Card, Col, Row, Typography } from 'antd'

import { APIData } from 'components'

const { Text } = Typography

export const CharacterVehicles = ({ data, ...props }) => (
  <Card style={{ width: '100%', height: '100%' }} {...props}>
    <Text className='primary-color' style={{ fontSize: '20px' }}>
      veículos e naves utilizados
    </Text>

    <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
      <Col xs={24} sm={12} style={{ display: 'flex', flexDirection: 'column' }}>
        <Text style={{ marginBottom: '8px' }}>veículos</Text>

        {data?.vehicles?.length === 0 && (
          <Text className='normal-font'>NENHUM ENCONTRADO</Text>
        )}

        {data?.vehicles?.length > 0 &&
          data?.vehicles.map(item => (
            <Text key={item} className='normal-font'>
              <APIData url={item} field='name' />
            </Text>
          ))}
      </Col>

      <Col xs={24} sm={12} style={{ display: 'flex', flexDirection: 'column' }}>
        <Text style={{ marginBottom: '8px' }}>naves</Text>

        {data?.starships?.length === 0 && (
          <Text className='normal-font'>NENHUM ENCONTRADO</Text>
        )}

        {data?.starships?.length > 0 &&
          data?.starships.map(item => (
            <Text key={item} className='normal-font'>
              <APIData url={item} field='name' />
            </Text>
          ))}
      </Col>
    </Row>
  </Card>
)

CharacterVehicles.propTypes = {
  data: PropTypes.object
}
