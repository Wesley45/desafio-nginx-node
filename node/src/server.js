const express = require('express');
const fakerator = require("fakerator/dist/locales/pt-BR")();
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

require('dotenv').config();

const app = express();

app.get('/', async (req, res) => {
    await createTable();
    await inserPerson();

    const people = await listPeople();

    let table = '<table>';
    table += '<tr><th>#</th><th>Name</th></tr>';
    for (let person of people) {
        table += `<tr><td>${person.id}</td><td>${person.name}</td></tr>`;
    }

    table += '</table>';
    return res.send('<h1>Full Cycle Rocks!</h1>' + table);
})

async function createConnection() {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        Promise: bluebird
    });
}

async function createTable() {
    const connection = await createConnection();

    await connection.query(`
        CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL  
        )
    `)

    connection.end();
}

async function listPeople() {
    const connection = await createConnection();

    const [rows, fields] = await connection.execute('SELECT id, name FROM people');

    return rows;
}

async function inserPerson() {
    const connection = await createConnection();

    const name = fakerator.names.name();

    const sql = "INSERT INTO people(name) values(?)";

    await connection.execute(sql, [name]);
}

app.listen(process.env.PORT || 3000, () => console.log(`Server is running on port: ${process.env.PORT}`))