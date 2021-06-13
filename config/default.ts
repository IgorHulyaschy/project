require('dotenv').config()
module.exports = {
  server:{
    port: Number(process.env.PORT)
  },
  database: {
    host: process.env.HOST,
    user: process.env.USER,
    db_name: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    connection: process.env.PG_CONNECTION_STRING
  },
  crypto: {
    salt: process.env.SALT,
    iterations: Number(process.env.ITERATIONS),
    chars: Number(process.env.CHARS),
    method: process.env.METHOD,
  }
}