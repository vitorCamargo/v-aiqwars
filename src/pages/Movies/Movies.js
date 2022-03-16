import React, { useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Typography } from 'antd'

import { useQueryMovies } from 'queries/movie'
import { useThrottle } from 'utils/hooks/useThrottle'

import { MoviesList } from './MoviesList'

const { Title } = Typography

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')

  const { data = {}, isFetching } = useQueryMovies({ name }, page)

  const onSearchByName = useThrottle(name => {
    setName(name)
    setPage(1)
  }, 300)

  return (
    <>
      <Row justify='center' style={{ width: '100%' }}>
        <Col xs={24} sm={20} md={16} lg={14} xl={12}>
          <Title
            level={1}
            className='primary-color'
            style={{ textAlign: 'center', fontSize: 40, marginBottom: 20 }}
          >
            filmes
          </Title>
        </Col>
      </Row>

      <Row justify='center' style={{ width: '100%', marginTop: '40px' }}>
        <Input
          size='large'
          prefix={<SearchOutlined />}
          style={{ maxWidth: '570px' }}
          placeholder='FILTRE POR NOME DO FILME'
          onChange={e => onSearchByName(e?.target?.value)}
        />
      </Row>

      <MoviesList
        data={data}
        page={page}
        setPage={setPage}
        gutter={[32, 32]}
        loading={isFetching}
        style={{ width: '100%', marginTop: '32px' }}
      />
    </>
  )
}
