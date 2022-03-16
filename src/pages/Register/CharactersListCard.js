import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Button, Card, Row, Typography } from 'antd'

import { APIData } from 'components'
import { useHistory } from 'react-router-dom'

const { Text } = Typography

export const CharactersListCard = ({ data = {}, ...props }) => {
  const history = useHistory()

  const vehicles = [...data?.vehicles, ...data?.starships]
  const id = useMemo(() => {
    const url = new URL(data?.url).pathname.split('/').filter(e => !!e)

    return url[url.length - 1]
  }, [data])

  const goToProfile = () => history.push(`/characters/${id}`)

  return (
    <Card bodyStyle={{ display: 'flex', flexDirection: 'column' }} {...props}>
      <Text className='primary-color' style={{ fontSize: '20px' }}>
        {data?.name}
      </Text>

      <Text style={{ marginTop: '24px' }}>nascimento</Text>

      <Text className='normal-font' style={{ marginTop: '8px' }}>
        DATA: {data?.birth_year}
      </Text>

      <Text className='normal-font'>
        PLANETA: <APIData url={data?.homeworld} field='name' />
      </Text>

      <Text style={{ marginTop: '24px' }}>descrição física</Text>

      <Text className='normal-font' style={{ marginTop: '8px' }}>
        {`ESPÉCIE: `}
        {data?.species?.length === 0 ? (
          <Text>NÃO ENCONTRADO</Text>
        ) : (
          <APIData url={data?.species[0]} field='name' />
        )}
      </Text>

      <Text className='normal-font'>ALTURA: {`${data.height / 100}m`}</Text>

      <Text style={{ marginTop: '24px' }}>veículos usados</Text>

      {vehicles.length === 0 && (
        <Text className='normal-font' style={{ marginTop: '8px' }}>
          NENHUM ENCONTRADO
        </Text>
      )}

      {vehicles.length > 0 &&
        vehicles.map(item => (
          <Text key={item} className='normal-font'>
            <APIData url={item} field='name' />
          </Text>
        ))}

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

CharactersListCard.propTypes = {
  data: PropTypes.object
}
