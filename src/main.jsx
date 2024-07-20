import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from './languages/i18n.js'
import { I18nextProvider } from 'react-i18next'

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>


  ,
)
