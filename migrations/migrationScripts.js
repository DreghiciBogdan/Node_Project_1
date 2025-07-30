const db = require('../config/db');
const fs = require('fs');
const path = require('path');

//Check the last migration
function getLastMigration(){
    const sql = `SELECT *
                        FROM Migrations
                        ORDER BY applied_at DESC
                        LIMIT 1`
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, result) {
            if (err) {
                console.error('Error getting last Migration:', err);
                return reject(err);
            }
           console.log('Last Migration:', result);
            resolve(result);
        })
    })
}

//Run a migration
async function runMigration(fileName){
    console.log('Running migration:', fileName)
    const filePath = path.join(__dirname, fileName)
    const migration = require(filePath)
    key = fileName.split('.')[0]
    try {
        await migration.up();
        db.query('INSERT INTO Migrations (name) VALUES (?)', [key], (err, result) => {
            if (err) {
                console.error('Error when inserting migration', err);
                return reject(err)
            }
            console.log("Migration inserted:", result);

        })
        console.log('Script executed correctly',result);
    }
    catch (err) {
        console.error('Error while running migration', err);
    }
}

//Run the remaining migrations
async function runRemainingMigration(){
    console.log('Running remaining migration...');
    const lastMigration = await getLastMigration()
    console.log('Last name:', lastMigration)
    fs.readdir(path.join(__dirname), (err, files) => {
        if (err) throw err;
        let pattern = /^[0-9]{3}-[a-z]+(?:-[a-z]+)*\.js$/;
        //console.log(files);
        const migrationFiles = files.filter(file => pattern.test(file))
                                            .filter(file=> file > lastMigration[0].name)
                                            .sort((a,b) => a.localeCompare(b));
        for (let file of migrationFiles) {
            console.log('File:', file);
            if ( pattern.test(file) && file > lastMigration[0].name) {
                console.log('File:', file);
                runMigration(file);
            }
        }
    });
}
//Get all migrations

module.exports = {runRemainingMigration}