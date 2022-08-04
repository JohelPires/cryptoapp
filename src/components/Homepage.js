import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'

function Homepage() {
  return (
    <>
      <Typography.Title level={3} className='heading'>
        Mercados Crypto
      </Typography.Title>
      <Row>
        <Col span={8}>
          <Statistic title='Criptomoedas totais' value='5' />
        </Col>
        <Col span={8}>
          <Statistic title='Número de Operadoras' value='5' />
        </Col>
        <Col span={8}>
          <Statistic title='Valor de Mercado Total' value='5' />
        </Col>
        <Col span={8}>
          <Statistic title='Volume total 24h' value='5' />
        </Col>
        <Col span={8}>
          <Statistic title='Mercados totais' value='5' />
        </Col>
      </Row>
    </>
  )
}

export default Homepage
