import React, { useContext } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Button, Layout, Menu, Row, Typography } from 'antd'

import { CustomIcon } from 'components/Icon'
import LayoutContext from 'providers/layout'

import './Header.less'

const { Text } = Typography

export const Header = () => {
  const history = useHistory()
  const { key } = useContext(LayoutContext)

  const onBack = () => history.push('/')
  const onRegister = () => history.push('/register')

  return (
    <Layout.Header
      style={{
        zIndex: 1,
        width: '100%',
        display: 'flex',
        position: 'fixed',
        justifyContent: 'space-between'
      }}
    >
      <Row
        align='middle'
        onClick={onBack}
        style={{
          height: '100%',
          marginRight: 30,
          cursor: 'pointer'
        }}
      >
        <CustomIcon className='primary-color' style={{ fontSize: '90px' }} />

        <Text
          className='primary-color'
          style={{ marginLeft: '16px', fontSize: '24px' }}
        >
          casting
        </Text>
      </Row>

      <Menu mode='horizontal' selectedKeys={[key]}>
        <Menu.Item key='characters'>
          <Link to='/'>personagens</Link>
        </Menu.Item>

        <Menu.Item key='movies'>
          <Link to='/movies'>filmes</Link>
        </Menu.Item>
      </Menu>

      <Row
        align='middle'
        style={{
          height: '100%',
          marginRight: 30,
          cursor: 'pointer'
        }}
      >
        <Button type='ghost' onClick={onRegister}>
          cadastre - se
        </Button>
      </Row>
    </Layout.Header>
  )
}
