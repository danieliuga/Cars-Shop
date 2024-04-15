import React, { useState, useEffect } from 'react';
import './vehiculos.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const fetchVehiculos = async () => {
      try {
        const response = await fetch('http://localhost:4000/vehiculos', {
          method: 'GET',
          contentType: "application/json",
        });
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de vehículos');
        }
        const data = await response.json();
        setVehiculos(data);
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };

    fetchVehiculos();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Lista de Vehículos</h1>
      </header>
      <div className='showVehiculos'>
        {vehiculos.map((vehiculo, index) => (
          <div key={vehiculo.id} className="vehiculo">
            <img src={vehiculo.imagen} alt={vehiculo.imagen} />
            <h2 className="vehicle-title">{vehiculo.modelo}</h2>
            <p>Precio: {vehiculo.precio}</p>
            <p>Stock: {vehiculo.stock}</p>
            <p>Descripción: {vehiculo.descripcion}</p>
          </div>
        ))}
      </div>
      <Link to="/">Volver a la pagina principal</Link>
      <Outlet />
    </div>
  );
}

export default App;
