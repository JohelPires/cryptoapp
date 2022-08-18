import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        {/* <Avatar src={icon} size='large' /> */}
        <Typography.Title level={2} className='logo'>
          <Link className='logo' to='/'>
            Crypto Hub
          </Link>
          {/* CryptoVerso */}
        </Typography.Title>

        {/* <Button className='menu-control-container'></Button> */}
      </div>
      {activeMenu && (
        <Menu theme='dark'>
          <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to='/'>Início</Link>
          </Menu.Item>
          <Menu.Item key='crypto' icon={<FundOutlined />}>
            <Link to='/crypto'>Crypto Moedas</Link>
          </Menu.Item>
          <Menu.Item key='exchange' icon={<MoneyCollectOutlined />}>
            <Link to='/exchange'>Operadoras</Link>
          </Menu.Item>
          <Menu.Item key='news' icon={<BulbOutlined />}>
            <Link to='/news'>Notícias</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar
