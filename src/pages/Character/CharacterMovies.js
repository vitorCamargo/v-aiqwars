import React from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Card, Row, Typography } from 'antd'

import { APIData } from 'components'

const { Text } = Typography

export const CharacterMovies = ({ data, ...props }) => {
  const history = useHistory()

  const openMovie = (value = '') => {
    const url = new URL(value).pathname.split('/').filter(e => !!e)
    const id = url[url.length - 1]

    history.push(`/movies/${id}`)
  }

  return (
    <Card style={{ width: '100%', height: '100%' }} {...props}>
      <Text className='primary-color' style={{ fontSize: '20px' }}>
        aparições em filmes
      </Text>

      <Row style={{ margin: '24px 0' }}>gráfico aqui</Row>

      <Text style={{ marginBottom: '8px' }}>aparece em</Text>

      {data?.films?.length === 0 && (
        <Text className='normal-font'>NENHUM FILMINHO NÃO</Text>
      )}

      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        {data?.films?.length > 0 &&
          data?.films.map(item => (
            <Text
              key={item}
              className='normal-font'
              onClick={() => openMovie(item)}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              <APIData url={item} field='title' />
            </Text>
          ))}
      </Row>
    </Card>
  )
}

CharacterMovies.propTypes = {
  data: PropTypes.object
}
