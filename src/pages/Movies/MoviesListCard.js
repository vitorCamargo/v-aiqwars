import React, { useMemo } from 'react'

import moment from 'moment'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Button, Card, Row, Typography } from 'antd'

import { romanize } from 'utils/formatter'

const { Text } = Typography

export const MoviesListCard = ({ data = {}, ...props }) => {
  const history = useHistory()

  const id = useMemo(() => {
    const url = new URL(data?.url).pathname.split('/').filter(e => !!e)

    return url[url.length - 1]
  }, [data])

  const goToProfile = () => history.push(`/movies/${id}`)

  return (
    <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }} {...props}>
      <Text className='primary-color' style={{ fontSize: '20px' }}>
        {data?.title}
      </Text>
      <Text className='normal-font'>Episódio {romanize(data?.episode_id)}</Text>

      <Text style={{ marginTop: '24px' }}>informações</Text>

      <Text className='normal-font' style={{ marginTop: '8px' }}>
        {`LANÇADO EM: ${moment(data?.release_date, 'YYYY-MM-DD').format(
          'DD/MM/YYYY'
        )}`}
      </Text>

      <Text className='normal-font'>DIRIGIDO POR: {data?.director}</Text>

      <Row style={{ marginTop: 'auto', width: '100%' }}>
        <Button
          type='ghost'
          onClick={goToProfile}
          style={{ marginTop: '24px', width: '100%' }}
        >
          ver detalhes
        </Button>
      </Row>
    </Card>
  )
}

MoviesListCard.propTypes = {
  data: PropTypes.object
}
