import { Avatar, Card, Col, Row, Select, Typography } from 'antd'
import { Option } from 'antd/lib/mentions'
import moment from 'moment'
import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

function News({ simples }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simples ? 3 : 21,
  })
  const { data } = useGetCryptosQuery(100)

  // console.log(data?.data?.coins)

  const demoImg =
    'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

  if (!cryptoNews?.value) return 'Loading...'

  return (
    <Row gutter={[24, 24]}>
      {!simples && (
        <Col span={24}>
          <Select
            showSearch
            placeholder='Selecione uma cryptomoeda...'
            className='select-news'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='Cryptocurrency'>Todas</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} lg={12} xl={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Typography.Title className='news-title' level={4}>
                  {news.name.length > 50
                    ? `${news.name.substring(0, 50)}...`
                    : news.name}
                </Typography.Title>
                <img
                  style={{ maxWidth: '200px', maxHeight: '100px' }}
                  src={news?.image?.thumbnail?.contentUrl || demoImg}
                  alt='crypto news'
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.descrition}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl || demoImg
                    }
                    alt=''
                  />
                  <Typography.Text className='provider-name'>
                    {news.provider[0]?.name}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
