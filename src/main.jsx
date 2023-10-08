import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss'
import { BrowserRouter } from 'react-router-dom'
import GlobalStore from './context/GlobalStore.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStore>
  </React.StrictMode>,
)

