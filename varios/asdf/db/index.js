const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    usr: 'root',
    db: 'delilah_resto.sql',
    host: 'localhost',
    port: '3306'
});

let delilahDb = {};

delilahDb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM', (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(results)
            }
        })
    })
};

module.exports = delilahDb;