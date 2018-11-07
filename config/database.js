import knex from 'knex';
import bookshelf from 'bookshelf';
import modelbase from 'bookshelf-modelbase';

const db = knex({
  client: process.env.DB_CONNECTION,
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
  },
});

const Bookshelf = bookshelf(db);
const Modelbase = modelbase(Bookshelf);

export default Modelbase;
