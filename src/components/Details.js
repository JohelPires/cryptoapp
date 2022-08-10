import {
  DollarCircleOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
import millify from 'millify'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

/*
​
coin: Object { uuid: "razxDUgYGNAdQ", symbol: "ETH", name: "Ethereum", … }
​​​
24hVolume: "21942281342"
​​​
allTimeHigh: Object { price: "4896.8770886838465", timestamp: 1636502400 }
​​​
btcPrice: "0.0766962804549931"
​​​
change: "9.62"
​​​
coinrankingUrl: "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth"
​​​
color: "#3C3C3D"
​​​
description: "<p>Ethereum (ETH) is a global, public decentralized blockchain designed to run peer-to-peer smart contracts. It allows developers to deploy all sorts of decentralized applications (Dapps), without the interference of third parties. Ethereum is also used for its own cryptocurrency ether. Ethereum is now the world&rsquo;s second-most valued cryptocurrency platform.</p>\n\n<h3>The goal of Ethereum</h3>\n\n<p>Ethereum is created as a blockchain platform on which other applications could be built on top of. Most of the online services, businesses and enterprises are built on a centralized system of governance. Ethereum aims to decentralize the existing client-server model; servers and clouds are replaced by so-called nodes, run by volunteers from all over the world. Ethereum&rsquo;s vision is that it would enable this same functionality to people anywhere around the world, enabling them to compete to offer services on top of this infrastructure.</p>\n\n<h3>Who built Ethereum</h3>\n\n<p>Ethereum was initially described in a white paper by Vitalik Buterin. In 2014, Buterin and the other co-founders launched a campaign where they sold ether (Ethereum tokens) to raise money to build their vision. Since the launch of the white paper in 2015, the platform has grown fast, and these days there are hundreds of developers involved.</p>\n"
​​​
iconUrl: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg"
​​​
links: Array(9) [ {…}, {…}, {…}, … ]
​​​
listedAt: 1438905600
​​​
lowVolume: false
​​​
marketCap: "224144743690"
​​​
name: "Ethereum"
​​​
numberOfExchanges: 159
​​​
numberOfMarkets: 2928
​​​
price: "1844.1669548093412"
​​​
priceAt: 1660148340
​​​
rank: 2
​​​
sparkline: Array(25) [ "1688.5619514345276", "1692.0273075609337", "1688.364185125935", … ]
​​​
supply: Object { confirmed: true, total: "121908871.99900001", circulating: "121542544.23956242" }
​​​
symbol: "ETH"
​​​
tier: 1
​​​
uuid: "razxDUgYGNAdQ"
​​​
websiteUrl: "https://www.ethereum.org"
*/

function Details() {
  const { id } = useParams()
  const { data, isFetching } = useGetCryptoDetailsQuery(id)

  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y']

  const cd = data.data.coin

  const stats = [
    {
      title: 'Preço em USD',
      value: `$ ${cd.price && millify(cd.price)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Preço em USD',
      value: `$ ${cd.volume && millify(cd.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Preço em USD',
      value: `$ ${cd.marketCap && millify(cd.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Preço em USD',
      value: `$ ${millify(cd.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ]

  console.log(stats)

  return (
    <div>
      <h1>Details {id}</h1>
    </div>
  )
}

export default Details
