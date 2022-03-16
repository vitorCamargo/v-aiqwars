import React from 'react'

import moment from 'moment'
import { useParams } from 'react-router-dom'

import { Col, Row, Typography } from 'antd'

import { Loading } from 'components'
import { useQueryCharacter } from 'queries/character'

import { CharacterInfo } from './CharacterInfo'
import { CharacterMovies } from './CharacterMovies'
import { CharacterVehicles } from './CharacterVehicles'

const { Title, Text } = Typography

export const Character = () => {
  const { id = '' } = useParams()
  const { data, isLoading } = useQueryCharacter(id)

  if (!data || isLoading) {
    return (
      <Row justify='center' style={{ marginTop: '30px', width: '100%' }}>
        {isLoading && <Loading style={{ fontSize: '50px' }} />}

        {!isLoading && <Text>personagem, encontrado não foi</Text>}
      </Row>
    )
  }

  return (
    <>
      <Row justify='space-between' gutter={[16, 16]} style={{ width: '100%' }}>
        <Title
          level={1}
          className='primary-color'
          style={{ textAlign: 'center', fontSize: 40, marginBottom: 20 }}
        >
          {data?.name}
        </Title>

        <Col
          className='normal-font'
          style={{
            display: 'flex',
            fontSize: '12px',
            textAlign: 'right',
            flexDirection: 'column'
          }}
        >
          <Text>
            {`ATUALIZADA EM: ${moment(data?.edited).format(
              'DD/MM/YYYY [às] HH:mm'
            )}`}
          </Text>

          <Text>
            {`CRIADA EM: ${moment(data?.created).format(
              'DD/MM/YYYY [às] HH:mm'
            )}`}
          </Text>
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ marginTop: '40px' }}>
        <Col
          xs={24}
          md={16}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Row style={{ marginBottom: '32px' }}>
            <CharacterInfo data={data} />
          </Row>

          <Row style={{ height: '100%' }}>
            <CharacterVehicles data={data} />
          </Row>
        </Col>

        <Col xs={24} md={8} style={{ height: '100%' }}>
          <CharacterMovies data={data} />
        </Col>
      </Row>
    </>
  )
}
