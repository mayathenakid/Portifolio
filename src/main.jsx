import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App.jsx'
import '../src/index.css'
import { Header } from '../src/components/Header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />    
  </React.StrictMode>  
)
