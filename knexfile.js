const path = require('path');
const BASE_PATH = path.join(__dirname, "src");
const password = process.env.DB_PASSWORD 
const username = process.env.DB_USERNAME 

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://${username}:${password}@localhost:5432/instagram`,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'fixtures')
    }
  },

};