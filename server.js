const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
// const res = require('express/lib/response');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404).end();
});