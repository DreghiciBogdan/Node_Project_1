const db = require('../config/db');

function createMenu  ({ name, description, timeSpan, private }) {
    const sql = 'INSERT INTO Menu (name, description, timeSpan, private) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, description, timeSpan, private], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

function getMenu(id){
    const sql = "SELECT * FROM Menu WHERE ID = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function getMenus(){
    const sql = 'SELECT * FROM Menu';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function updateMenu({name, description, timeSpan, private, id}) {
    const sql = 'UPDATE Menu SET name = ?, description = ?, timeSpan = ?, private = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, description, timeSpan, private, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function deleteMenu(id){
    const sql = 'DELETE FROM Menu WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

module.exports = {createMenu, getMenus ,getMenu, updateMenu, deleteMenu};