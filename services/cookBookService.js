const db = require('../config/db');

function createCookBook  ({ name, description, difficulty, cuisine}) {
    const sql = 'INSERT INTO CookBook (name, description, difficulty, cuisine) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, description, difficulty, cuisine], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

function getcookBook(id){
    const sql = "SELECT * FROM CookBook WHERE ID = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function getCookBooks(){
    const sql = 'SELECT * FROM CookBook';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function updateCookBook({name, description, difficulty, cuisine, id}) {
    const sql = 'UPDATE CookBook SET name = ?, description = ?, difficulty = ?, cuisine = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, description, difficulty, cuisine, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function deleteCookBook(id){
    const sql = 'DELETE FROM CookBook WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

module.exports = {createCookBook, getCookBooks ,getcookBook, updateCookBook, deleteCookBook};