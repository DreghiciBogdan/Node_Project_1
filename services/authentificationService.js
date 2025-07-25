const db = require('../config/db');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SK';

function logIn({email, password}) {
    const sql = 'SELECT * FROM User WHERE email = ? AND password = ?';
    return new Promise((resolve, reject) => {
        db.query(sql,[email.trim(), password.trim()], (err, result) => {
            if (err) {
                console.error('Login error:', err);
                return reject('Database error');
            }
            if (result.length === 0) {
                return reject('Invalid email or password');
            }
            const token = jwt.sign({ id: result[0].id, email: result[0].email }, SECRET_KEY);
            resolve(token);
        })
    })
}

module.exports = {logIn};