import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Vehiculos from './Components/Vehiculos/Vehiculos.jsx'
import NoPage from './Components/NoPage/NoPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
)
