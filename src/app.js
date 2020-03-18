#!/usr/bin/env node --use_strict

const express = require('express');

const StatusController = require('./controllers/StatusController');

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/health', (req, res) => (new StatusController(req, res)).getHealth());

app.get('/ready', (req, res) => (new StatusController(req, res)).getReady());

app.get('/version', (req, res) => (new StatusController(req, res)).getVersion());

app.listen(port);
