const db = require('../config/db');

function addRecipeToCookBook({ cookBook_id, recipe_id }) {
    const sql = 'INSERT INTO CookBook_Recipe (cookBook_id, recipe_id) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [cookBook_id, recipe_id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function removeRecipeFromCookBook({ cookBook_id, recipe_id }) {
    const sql = 'DELETE FROM CookBook_Recipe WHERE cookBook_id = ? AND recipe_id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [cookBook_id, recipe_id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function getRecipesByCookBook(cookBook_id) {
    const sql = `
        SELECT r.* 
        FROM Recipe r
        JOIN CookBook_Recipe cr ON r.id = cr.recipe_id
        WHERE cr.cookBook_id = ?
    `;
    return new Promise((resolve, reject) => {
        db.query(sql, [cookBook_id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {addRecipeToCookBook, removeRecipeFromCookBook, getRecipesByCookBook};