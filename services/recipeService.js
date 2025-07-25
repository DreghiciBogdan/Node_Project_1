const db = require('../config/db');

function createRecipe  ({ name, description, cuisine, ingredients, calories }) {
    const sql = 'INSERT INTO Recipe (name, description, cuisine, ingredients, calories, user_id) VALUES (?, ?, ?, ?, ?, 1)';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, description, cuisine, ingredients, calories], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

function getRecipe(id){
    const sql = "SELECT * FROM Recipe WHERE ID = ?";
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function getRecipes(){
    const sql = 'SELECT * FROM Recipe';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function updateRecipe({name, description, cuisine, ingredients, calories, id}) {
    const sql = 'UPDATE Recipe SET name = ?, description = ?, cuisine = ?, ingredients = ?, calories = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [name, description, cuisine, ingredients, calories, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function deleteRecipe(id){
    const sql = 'DELETE FROM Recipe WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

module.exports = {createRecipe, getRecipe, getRecipes, updateRecipe, deleteRecipe};