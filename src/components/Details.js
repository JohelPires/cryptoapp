import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import { Col, Select, Typography } from 'antd'
import { Option } from 'antd/lib/mentions'
import millify from 'millify'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

function Details() {
  const { coinId } = useParams()
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)

  const [timePeriod, setTimePeriod] = useState('7d')
  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y']

  const cd = data?.data?.coin

  const stats = [
    {
      title: 'Preço em USD',
      value: `$ ${cd?.price && millify(cd?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Rank',
      value: `${cd?.rank}`,
      icon: <NumberOutlined />,
    },
    {
      title: '24h Volume',
      value: `${cd['24hVolume'] && millify(cd['24hVolume'])}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Valor de Mercado',
      value: `$ ${cd?.marketCap && millify(cd?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Alta histórica',
      value: `$ ${millify(cd?.allTimeHigh?.price)}`,
      icon: <TrophyOutlined />,
    },
  ]
  const genericStats = [
    {
      title: 'Quantidade de Mercados',
      value: cd?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Número de Operadoras',
      value: cd?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Approved Supply',
      value: cd?.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: cd?.totalSupply,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: cd?.circulatingSupply,
      icon: <TrophyOutlined />,
    },
  ]

  if (isFetching) return 'Carregando...'
  console.log(data)

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Typography.Title level={2} className='coin-name'>
          {data.data?.coin?.name} ({data.data?.coin?.symbol})
        </Typography.Title>
        {/* <p>{data.data?.coin?.description}</p> */}
      </Col>
      <Select
        defaultValue='7d'
        className='select-timeperiod'
        placeholder='Selecione o período de tempo'
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((p) => (
          <Option key={p}>{p}</Option>
        ))}
      </Select>
      <p>line chart for {timePeriod}</p>
      <Col className='stats-container'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <Typography.Title className='coin-details-heading' level={3}>
              Estatísticas para o {data.data?.coin?.name}
            </Typography.Title>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Typography.Text>{icon}</Typography.Text>
                <Typography.Text>{title}</Typography.Text>
              </Col>
              <Typography.Text className='stats'>{value}</Typography.Text>
            </Col>
          ))}
        </Col>
      </Col>
    </Col>
  )
}

export default Details
