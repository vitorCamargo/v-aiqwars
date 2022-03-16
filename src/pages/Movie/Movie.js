import React from 'react'

import moment from 'moment'
import { useParams } from 'react-router-dom'

import { Col, Row, Typography } from 'antd'

import { Loading } from 'components'
import { romanize } from 'utils/formatter'
import { useQueryMovie } from 'queries/movie'

import { MovieInfo } from './MovieInfo'
import { MovieCast } from './MovieCast'
import { MovieSynopsis } from './MovieSynopsis'

const { Title, Text } = Typography

export const Movie = () => {
  const { id = '' } = useParams()
  const { data, isLoading } = useQueryMovie(id)

  if (!data || isLoading) {
    return (
      <Row justify='center' style={{ marginTop: '30px', width: '100%' }}>
        {isLoading && <Loading style={{ fontSize: '50px' }} />}

        {!isLoading && <Text>filme, encontrado não foi</Text>}
      </Row>
    )
  }

  return (
    <>
      <Row justify='space-between' gutter={[16, 16]} style={{ width: '100%' }}>
        <Col>
          <Title
            level={1}
            className='primary-color'
            style={{ margin: 0, fontSize: 40 }}
          >
            {data?.title}
          </Title>

          <Title
            level={1}
            className='normal-font'
            style={{ fontSize: 24, margin: 0, marginBottom: 20 }}
          >
            Episódio {romanize(data?.episode_id)}
          </Title>
        </Col>

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
          md={8}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Row style={{ marginBottom: '32px' }}>
            <MovieSynopsis data={data} />
          </Row>

          <Row style={{ height: '100%' }}>
            <MovieInfo data={data} />
          </Row>
        </Col>

        <Col xs={24} md={16} style={{ height: '100%' }}>
          <MovieCast data={data} />
        </Col>
      </Row>
    </>
  )
}
