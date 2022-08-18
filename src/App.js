import { Layout, Typography } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'
import Crypto from './components/Crypto'
import Exchange from './components/Exchange'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import News from './components/News'
import 'antd/dist/antd.min.css'
import './App.scss'
import Details from './components/Details'
import { useGetCryptoDetailsQuery } from './services/cryptoApi'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/crypto' element={<Crypto />} />
              <Route exact path='/crypto/:coinId' element={<Details />} />
              <Route exact path='/exchange' element={<Exchange />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white' }}>
            Copyright 2022
          </Typography.Title>
        </div>
      </div>
    </div>
  )
}

export default App
