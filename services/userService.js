const db = require('../config/db');
const validate = require('validate.js');
const userConstraints = require('../validators/userValidator.js');

function createUser  ({ username, email, password,cuisineMastery, phone }) {
    const validationResult = validate({username}, userConstraints);
    console.log(validationResult);
    if (validationResult) {
        //console.log('Validation failed', validationResult);
        return Promise.reject({ message: 'Validation failed', details: validationResult });
    }
    else {
        console.log('Validation succeeded', username);
    }
    const sql = 'INSERT INTO User (username, email, password,cuisineMastery, phone) VALUES (?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [username, email, password,cuisineMastery, phone], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

function getUser(id){
    const sql = "SELECT * FROM User WHERE ID = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function getUsers(){
    const sql = 'SELECT * FROM User';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function updateUser(id, username, email, password, phone) {
    const sql = 'UPDATE User SET username = ?, email = ?, password =?, phone = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [username, email, password, phone, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function deleteUser(id){
    const sql = 'DELETE FROM User WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}
function writeUsers() {
    let sql = 'SELECT * FROM User';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching users:', err);
        }
        else {
            const fs = require("node:fs");
            const content = result
                .map(elem => JSON.stringify(elem, null,30))
                .join('\n\n');
            //console.log(content);
            fs.writeFile('users.json', content + "\n", (err) => {
                if (err) {
                    console.error('Error writing users:', err);
                } else {
                    console.log('Users written successfully');
                }
            })
        }})
}


module.exports = {writeUsers,createUser, getUsers, getUser, update: updateUser, deleteUser };
