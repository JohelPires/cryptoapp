import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>main</div>
      <div className='footer'>footer</div>
    </div>
  )
}

export default App
