require('dotenv').config()
const util = require('util')
const mysql = require('mysql')

const MYSQL_DEV_USER = process.env.MYSQL_DEV_USER;
const MYSQL_DEV_PASSWORD = process.env.MYSQL_DEV_PASSWORD;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: MYSQL_DEV_USER,
  password: MYSQL_DEV_PASSWORD,
  database: 'dognet_data'
})

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }

  if (connection) connection.release()

  return
})

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query)
pool.getConnection = util.promisify(pool.getConnection)

module.exports = pool