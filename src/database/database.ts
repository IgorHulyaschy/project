import config from 'config'
/**
 * @type {Knex}
 */
 const database = ({
  client: 'pg',
  connection: {
    host : config.get('database.host'),
    user : config.get('database.user'),
    password : config.get('database.password'),
    database : config.get('database.db_name'),
  },
  migrations: {
    directory: __dirname + '/db/migrations',
  },
  seeds: {
      directory: __dirname + '/db/seeds',
  },
});
const db = require("knex")(database);
export default db;