import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  const [resposnse, setResponse] = useState('')
  const [health, setHealth] = useState('fail')
  
  const BASE_URL = process.env.REACT_APP_ENV_URL || 'localhost'
  const API_PORT = process.env.REACT_APP_API_PORT || '3001'
  const API_URL = process.env.REACT_APP_API_URL || 'api'
  const API_BASE_ADDR = `http://${BASE_URL}:${API_PORT}/${API_URL}`
  console.log(`Request from address: ${API_BASE_ADDR}`)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDR}/test`)
      setResponse(result.data)
    }
    fetchData()
    return () => {
    }
  }, [API_BASE_ADDR])
  
  useEffect(() => {
    const checkHealth = async () => {
      const result = await axios(`${API_BASE_ADDR}/healthcheck`)
      setHealth(result.data.status)
    }
    checkHealth()
    const statusTimer = setInterval(() => checkHealth(),
      10000)
    return () => {
      clearInterval(statusTimer)
    }
  }, [API_BASE_ADDR])
  
  return (
    <div className="App">
      <header className="App-header">
        <span>Mongo health: {health}</span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The response is: {resposnse}
        </a>
      </header>
    </div>
  );
}

export default App;
