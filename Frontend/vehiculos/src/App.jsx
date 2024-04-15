import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">IUGA Shop</h1>
      </header>
      <div className='vehiculos-container'>
        <div className='vehiculosContent'>
          <div className='coches'>
            <h2 className="vehicle-title">Coches</h2>
            <img src="/audi_R8.jpg" alt="Imagen de un coche" />
            <Link to="/vehiculos">Coches Page</Link>
          </div>
          <div className='motos'>
            <h2 className="vehicle-title">Motos</h2>
            <img src="/mt09_2024.jpg" alt="Imagen de una moto" />
            <Link to="/hola">Motos Page</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
