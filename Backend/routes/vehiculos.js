const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const db = require('./database');

router.get('/', async (req, res) => {
  console.log('Conexión exitosa a la base de datos');
  const client = new Client(db);
  try {
    await client.connect();
    const vehiculosResult = await client.query(`SELECT * FROM vehiculos`);
    const vehiculos = vehiculosResult.rows;
    console.log(vehiculos);
    res.json(vehiculos);
  } catch (error) {
    console.error(error);
    next(error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.end();
  }
});

module.exports = router;

//script que me compare dos json y me cree un nuebo json con las diferencias entre ellos
