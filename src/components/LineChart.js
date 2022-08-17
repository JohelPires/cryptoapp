import { Col, Row, Typography } from 'antd'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = []
  const coinTimeStamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimeStamp.push(coinHistory.data.history[i].timestamp)
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Preço em USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  }
  const options = {
    responsive: true,
  }

  return (
    <>
      <Row className='chart-header'>
        <Typography.Title level={2} className='chart-title'>
          {coinName} Price Chart
        </Typography.Title>
        <Col className='price-container'>
          <Typography.Title level={5} className='price-change'>
            Variação: {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className='current-price'>
            Preço atual do {coinName} em USD: ${currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
