const dotenv = require('dotenv');
dotenv.config();
const {createPool} = require('mysql2/promise');

const pool = createPool({
    host:process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    port: process.env.DBPORT
});
pool.getConnection()
    .then(connection =>{
        console.log('Connected to MySQL database');
        connection.release(); 
    })
    .catch(err =>{
        console.log('Error connecting to MySQL:',err);
    });
module.exports = pool;