const db = require('../config/db.js');

module.exports = {
    name : '018-create-random',
    up: async() => {
        const sql = `CREATE TABLE IF NOT EXISTS Restaurant (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            something VARCHAR(20) NOT NULL);`;
        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                if (err){
                    console.error('Error running migration:', err);
                    return reject(err);
                }
                console.log('Created random', result);
                resolve(result);
            })
        })
    }
}