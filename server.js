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

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

function viewEmployees() {
    var query = 'SELECT * FROM employee';
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table('EMPLOYEES', res);
        promptQuestions();
    })
};

function viewRoles() {
    var query = 'SELECT * FROM role';
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table('ROLES', res);
        promptQuestions();
    })
};

function viewDepartments() {
    var query = 'SELECT * FROM department';
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table('DEPARTMENTS', res);
        promptQuestions();
    })
};