const express = require('express');
const router = require('./routes/Router.js');

const app = express();

app.use(express.json());

app.use('/health', healthRoutes);

module.exports = app;