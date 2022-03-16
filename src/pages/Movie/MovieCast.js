import React from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Card, Col, Row, Typography } from 'antd'

import { APIData } from 'components'

const { Text } = Typography

export const MovieCast = ({ data, ...props }) => {
  const history = useHistory()

  const openCharacter = (value = '') => {
    const url = new URL(value).pathname.split('/').filter(e => !!e)
    const id = url[url.length - 1]

    history.push(`/characters/${id}`)
  }

  return (
    <Card style={{ width: '100%', height: '100%' }} {...props}>
      <Text className='primary-color' style={{ fontSize: '20px' }}>
        aparecem nesse filme
      </Text>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col
          xs={24}
          sm={12}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Text style={{ marginBottom: '8px' }}>personagens</Text>

          {data?.characters?.length === 0 && (
            <Text className='normal-font'>ENCONTRADOS NÃO FORAM</Text>
          )}

          <Row gutter={16}>
            {data?.characters?.length > 0 &&
              data?.characters.map(item => (
                <Col xs={24} sm={12} key={item}>
                  <Text
                    className='normal-font'
                    onClick={() => openCharacter(item)}
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    <APIData url={item} field='name' />
                  </Text>
                </Col>
              ))}
          </Row>
        </Col>

        <Col
          xs={24}
          sm={12}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Text style={{ marginBottom: '8px' }}>espécies</Text>

          {data?.species?.length === 0 && (
            <Text className='normal-font'>ENCONTRADOS NÃO FORAM</Text>
          )}

          <Row gutter={16}>
            {data?.species?.length > 0 &&
              data?.species.map(item => (
                <Col xs={24} sm={12} key={item}>
                  <Text className='normal-font'>
                    <APIData url={item} field='name' />
                  </Text>
                </Col>
              ))}
          </Row>
        </Col>

        <Col
          sm={8}
          xs={24}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Text style={{ marginBottom: '8px' }}>veículos</Text>

          {data?.vehicles?.length === 0 && (
            <Text className='normal-font'>ENCONTRADOS NÃO FORAM</Text>
          )}

          {data?.vehicles?.length > 0 &&
            data?.vehicles.map(item => (
              <Text className='normal-font' key={item}>
                <APIData url={item} field='name' />
              </Text>
            ))}
        </Col>

        <Col
          sm={8}
          xs={24}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Text style={{ marginBottom: '8px' }}>naves</Text>

          {data?.starships?.length === 0 && (
            <Text className='normal-font'>ENCONTRADAS NÃO FORAM</Text>
          )}

          {data?.starships?.length > 0 &&
            data?.starships.map(item => (
              <Text className='normal-font' key={item}>
                <APIData url={item} field='name' />
              </Text>
            ))}
        </Col>

        <Col
          sm={8}
          xs={24}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Text style={{ marginBottom: '8px' }}>planetas</Text>

          {data?.planets?.length === 0 && (
            <Text className='normal-font'>ENCONTRADAS NÃO FORAM</Text>
          )}

          {data?.planets?.length > 0 &&
            data?.planets.map(item => (
              <Text key={item} className='normal-font'>
                <APIData url={item} field='name' />
              </Text>
            ))}
        </Col>
      </Row>
    </Card>
  )
}

MovieCast.propTypes = {
  data: PropTypes.object
}
