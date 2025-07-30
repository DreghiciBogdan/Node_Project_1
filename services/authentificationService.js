const db = require('../config/db');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'SK';

function getPermissions(id){
    console.log(id);
    const sql = `SELECT rp.PID
                 FROM User u
                 INNER JOIN Role_Permission rp ON u.role = rp.RID
                 WHERE u.id = ?;`;
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error when getting permissions', err);
                return reject(err)
            }
            console.log("Result:", result);
            resolve(result.map(row => row.PID));
        })
    })
}

async function logIn({email, password}) {
    const sql = 'SELECT * FROM User WHERE email = ? AND password = ?';
    return new Promise((resolve, reject) => {
        db.query(sql,[email.trim(), password.trim()], async (err, result) => {
            if (err) {
                console.error('Login error:', err);
                return reject('Database error');
            }
            if (result.length === 0) {
                return reject('Invalid email or password');
            }
            try {
                console.log(result[0].id);
                const permissions = await getPermissions(result[0].id);
                console.log('Permissions:', permissions);
                const token = jwt.sign({id: result[0].id, email: result[0].email, permissions: permissions}, SECRET_KEY);
                resolve(token);
            } catch (err) {
                console.error('Permission fetch error:', err);
                reject('Error fetching permissions');
            }
        })
    })
}

module.exports = {logIn};