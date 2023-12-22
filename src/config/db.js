const dotenv = require("dotenv");
dotenv.config();
const { createPool } = require("mysql2/promise");

console.log({
  host: process.env.HOSTDB,
  user: process.env.USERDB,
  password: process.env.DBPASS,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  port: process.env.DBPORT,
});

const pool = createPool({
  host: process.env.HOSTDB,  // Corregido de HOST a HOSTDB
  user: process.env.USERDB,
  password: process.env.DBPASS,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  port: parseInt(process.env.DBPORT, 10),  // Convertir a número
});

pool.getConnection()
  .then((connection) => {
    console.log("Connected to MySQL database");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
    process.exit(1);
  });

module.exports = pool;

