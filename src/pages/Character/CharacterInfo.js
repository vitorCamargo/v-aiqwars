import React from 'react'
import PropTypes from 'prop-types'

import { Card, Col, Row, Typography } from 'antd'

import { APIData } from 'components'

const { Text } = Typography

export const CharacterInfo = ({ data, ...props }) => (
  <Card style={{ width: '100%' }} {...props}>
    <Text className='primary-color' style={{ fontSize: '20px' }}>
      informações físicas
    </Text>

    <Row style={{ marginTop: '24px' }} className='normal-font'>
      <Col xs={24} sm={12} lg={8} xl={5}>
        {`ESPÉCIE: `}
        {data?.species?.length === 0 ? (
          <Text>NÃO ENCONTRADO</Text>
        ) : (
          <APIData url={data?.species[0]} field='name' />
        )}
      </Col>

      <Col xs={24} sm={12} lg={8} xl={5}>
        ALTURA: {`${data.height / 100}m`}
      </Col>

      <Col xs={24} sm={12} lg={8} xl={5}>
        PESO: {data?.mass}kg
      </Col>

      <Col xs={24} sm={12} lg={8} xl={5}>
        COR DO CABELO: {data?.hair_color}
      </Col>
    </Row>
  </Card>
)

CharacterInfo.propTypes = {
  data: PropTypes.object
}
