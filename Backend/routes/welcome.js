// En welcome.js

const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Frontend/vehiculos/src/App.jsx'));
});

module.exports = router;
