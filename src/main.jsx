import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App.jsx'
import '../src/index.css'
import { Header } from '../src/components/Header/Header.jsx'
import { Sobre } from '../src/components/Sobre/Sobre.jsx'
import { Contato } from '../src/components/Contato/Contato.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />  
    <Sobre categoria="sobreMim"/>
    <Contato categoria="contato"/>
  </React.StrictMode>, 
)
