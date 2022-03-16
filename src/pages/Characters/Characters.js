import React, { useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Typography } from 'antd'

import { useThrottle } from 'utils/hooks/useThrottle'
import { useQueryCharacters } from 'queries/character'

import { CharactersList } from './CharactersList'

const { Title } = Typography

export const Characters = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')

  const { data = {}, isFetching } = useQueryCharacters({ name }, page)

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
            personagens
          </Title>
        </Col>
      </Row>

      <Row justify='center' style={{ width: '100%', marginTop: '40px' }}>
        <Input
          size='large'
          prefix={<SearchOutlined />}
          style={{ maxWidth: '570px' }}
          placeholder='FILTRE POR NOME DO PERSONAGEM'
          onChange={e => onSearchByName(e?.target?.value)}
        />
      </Row>

      <CharactersList
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
