import config from 'config'
module.exports = {

  client: "pg",
  connection: {
    host : config.get('database.host'),
    user : config.get('database.user'),
    password : config.get('database.password'),
    database : config.get('database.db_name'),
    port: config.get('database.port')
  },
  
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "migrations",
  },

};
