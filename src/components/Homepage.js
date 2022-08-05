import { Col, Row, Statistic, Typography } from 'antd'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Crypto from './Crypto'
import News from './News'

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  console.log(data)

  if (isFetching) return 'Carregando ...'

  return (
    <>
      <Typography.Title level={3} className='heading'>
        Mercados Crypto
      </Typography.Title>
      <Row>
        <Col span={8}>
          <Statistic title='Criptomoedas totais' value={globalStats.total} />
        </Col>
        <Col span={8}>
          <Statistic
            title='Número de Operadoras'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title='Valor de Mercado Total'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title='Volume total 24h'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title='Mercados totais'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Top 10 Cryptomoedas no mundo
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/crypto'>mais...</Link>
        </Typography.Title>
      </div>
      <Crypto simples />
      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>
          Top 10 Notícias
        </Typography.Title>
        <Typography.Title level={3} className='show-more'>
          <Link to='/crypto'>mais...</Link>
        </Typography.Title>
      </div>
      <News simples />
    </>
  )
}

export default Homepage
