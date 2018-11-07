require('dotenv').config();
// Update with your config settings.

const migrations = {
  client: process.env.DB_CONNECTION,
  connection: {
    database: process.env.DB_DATABASE,
    user:     process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    tableName: 'migrations',
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
};

module.exports = {
  // Develpment
  development: migrations,
  // Staging
  staging: migrations,
  // Production
  production: migrations,
};
