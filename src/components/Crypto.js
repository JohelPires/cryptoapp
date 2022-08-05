import { Card, Col, Input, Row } from 'antd'
import millify from 'millify'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

function Crypto({ simples }) {
  const count = simples ? 10 : 100
  // console.log(count)
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  // console.log(cryptos)

  if (isFetching) return 'Carregando...'

  return (
    <>
      <div className='search-crypto'>
        <Input placeholder='Procurar cryptomoeda...' />
      </div>
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank} - ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
              >
                <p>Preço: ${millify(currency.price)}</p>
                <p>Market Cap: ${millify(currency.marketCap)}</p>
                <p>
                  Variação:{' '}
                  <span
                    style={
                      currency.change > 0
                        ? { color: 'green' }
                        : { color: 'red' }
                    }
                  >
                    {millify(currency.change)}%
                  </span>
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Crypto
