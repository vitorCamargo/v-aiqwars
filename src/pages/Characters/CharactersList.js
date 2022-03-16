import React from 'react'
import PropTypes from 'prop-types'

import { Col, Pagination, Row, Typography } from 'antd'

import { Loading } from 'components'

import { CharactersListCard } from './CharactersListCard'

const { Text } = Typography

export const CharactersList = ({
  page,
  setPage,
  loading,
  data = {},
  ...props
}) => {
  const { count = 0, results = [] } = data

  if (loading || count === 0) {
    return (
      <Row justify='center' style={{ marginTop: '30px', width: '100%' }}>
        {loading && <Loading style={{ fontSize: '50px' }} />}

        {!loading && <Text>personagens, encontrados não foram</Text>}
      </Row>
    )
  }

  return (
    <>
      <Row {...props}>
        {results.map(character => (
          <Col xs={24} sm={12} md={8} lg={6} xxl={4} key={character?.name}>
            <CharactersListCard data={character} />
          </Col>
        ))}
      </Row>

      <Row justify='center' style={{ width: '100%', marginTop: '32px' }}>
        <Pagination
          current={page}
          onChange={setPage}
          defaultPageSize={10}
          showSizeChanger={false}
          total={data?.count || 0}
        />
      </Row>
    </>
  )
}

CharactersList.propTypes = {
  data: PropTypes.object,
  page: PropTypes.number,
  loading: PropTypes.bool,
  setPage: PropTypes.func
}
