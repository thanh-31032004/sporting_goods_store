import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.tsx'
import { configureAxios } from './config/axiosConfig.ts'
configureAxios()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
