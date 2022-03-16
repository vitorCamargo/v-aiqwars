import React from 'react'

import { Link } from 'react-router-dom'

import { Row, Typography } from 'antd'

import { CustomIcon } from 'components/Icon'

const { Text } = Typography

export const Error404 = () => (
  <Row
    align='middle'
    justify='center'
    className='primary-color'
    style={{ flex: 1, flexDirection: 'column' }}
  >
    <Row style={{ fontSize: '170px', alignItems: 'baseline' }}>
      {'4'}
      <CustomIcon type='yoda' className='yoda-color' />
      {'4'}
    </Row>

    <Text style={{ marginTop: '-30px', fontSize: '30px' }}>
      encontrada, a página não foi!
    </Text>

    <Text style={{ fontSize: '12px' }}>
      faça ou não faça, tentativa não há.
      <Link to='/' style={{ marginLeft: 5, textDecoration: 'underline' }}>
        <Text>Retorne ao princípio.</Text>
      </Link>
    </Text>
  </Row>
)
