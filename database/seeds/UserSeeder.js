// Table Name
const TABLE_NAME = 'users';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    { email: 'admin@example.com', password: 123456, name: 'Admin', created_at: new Date(), updated_at: new Date() },
  ]);
};
