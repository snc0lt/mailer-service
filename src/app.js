'use strict'

require('dotenv').config();

const express = require('express');
const app = express();
const router = express.Router();
const { port } = require('./config');

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
app.use('/', require('./routes')(router));


app.listen(port, () => console.log(`Email service listening on port ${port}!`));