import React, { useState, useEffect, useMemo } from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { Card, Row, Typography } from 'antd'

import { APIData, Chart } from 'components'

const { Text } = Typography

const NUMBER_MOVIES = 6

export const CharacterMovies = ({ data, ...props }) => {
  const history = useHistory()
  const [chart, setChart] = useState(null)

  const openMovie = (value = '') => {
    const url = new URL(value).pathname.split('/').filter(e => !!e)
    const id = url[url.length - 1]

    history.push(`/movies/${id}`)
  }

  const settings = useMemo(
    () => ({
      show: data?.films?.length,
      abscence: NUMBER_MOVIES - data?.films?.length,
      percentage: parseFloat(
        ((data?.films?.length / NUMBER_MOVIES) * 100).toFixed(2)
      ).toString()
    }),
    [data]
  )

  useEffect(() => {
    if (chart) {
      chart.data([
        { type: 'aparece', value: settings.show },
        { type: 'não aparece', value: settings.abscence }
      ])

      chart.coordinate('theta', { radius: 0.75 })
      chart.tooltip(false)
      chart.legend(false)

      chart
        .interval()
        .adjust('stack')
        .position('value')
        .color('type', ['#FFE81F', '#7388A95A'])

      chart.render()
    }
  }, [settings, chart])

  return (
    <Card style={{ width: '100%', height: '100%' }} {...props}>
      <Text className='primary-color' style={{ fontSize: '20px' }}>
        aparições em filmes
      </Text>

      <Row justify='center' style={{ margin: '24px 0' }}>
        <Chart height={200} setChart={setChart} />

        <Text className='normal-font' style={{ fontSize: '12px' }}>
          {`${settings.percentage}% (${settings.show} DE ${NUMBER_MOVIES} FILMES)`}
        </Text>
      </Row>

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
