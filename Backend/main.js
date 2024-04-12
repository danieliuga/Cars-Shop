var createError = require('http-errors');
var express = require('express');
const cors = require("cors");
var app = express();

var welcomeRouter = require('./routes/welcome');
var vehiculosRouter = require('./routes/vehiculos');
var tiposRouter = require('./routes/tipos');
var userRouter = require('./routes/user');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/vehiculos', vehiculosRouter);
// app.use('/tipos', tiposRouter);
// app.use('/user', userRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
