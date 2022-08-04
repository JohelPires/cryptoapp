import { Layout } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'
import './App.scss'
import Crypto from './components/Crypto'
import Exchange from './components/Exchange'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import News from './components/News'
import 'antd/dist/antd.min.css'

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
              <Route exact path='/exchange' element={<Exchange />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      {/* <div className='footer'>footer</div> */}
    </div>
  )
}

export default App
