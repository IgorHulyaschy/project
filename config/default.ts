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
  },
}