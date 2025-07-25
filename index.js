require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected')
  let sql = "INSERT INTO User(username, email, phone) VALUES ('Maria','maria@eon.ro','0751864287')"
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  })
})

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected')
  const sql = `CREATE TABLE Recipe (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(200),
      descrption VARCHAR(500),
      cuisine VARCHAR(100),
      rating INT,
      user_id INT,
      FOREIGN KEY (user_id) REFERENCES User(id)
    ) `;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  })
})


app.get('/test-sqs', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      res.status(500).send('Error querying the database');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});