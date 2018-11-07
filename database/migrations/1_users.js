// Table Name
const User = 'users';
const Article = 'articles';
const Product = 'products';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
  await db.schema.hasTable(User)
    .createTable(User, (table) => {
      table.increments('id').primary().unique();
      table.string('email', 255).unique().notNullable();
      table.string('password', 255);
      table.string('name', 255).unique().notNullable();
      table.text('avatar', 'longtext');
      table.timestamps();
    });
  await db.schema.hasTable(Article)
    .createTable(Article, (table) => {
      table.increments('id').primary();
      table.string('title', 255);
      table.string('image_url', 255);
      table.text('description', 'longtext');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.timestamps();
    });
  await db.schema.hasTable(Product)
    .createTable(Product, (table) => {
      table.increments('id').primary();
      table.string('name', 255);
      table.string('image_url', 255);
      table.text('description', 'longtext');
      table.timestamps();
    });
};

/**
 * Migration Down
 * @param {Migration} db
 */
exports.down = async (db) => {
  await db.schema.hasTable(Article).dropTableIfExists(Article);
  await db.schema.hasTable(User).dropTableIfExists(User);
};
