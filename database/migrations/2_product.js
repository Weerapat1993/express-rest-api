// Table Name
const Product = 'products';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
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
  await db.schema.hasTable(Product).dropTableIfExists(Product);
};
