// Table Name
const TABLE_NAME = 'products';

/**
 * Database Seeder
 * @param {(table: string) => Object} db
 */
exports.seed = async (db) => {
  await db(TABLE_NAME).del();
  await db(TABLE_NAME).insert([
    {
      name: 'โดรน (สีขาว) รุ่น Spark Combo',
      image_url: 'https://dfmukn6hiiik1.cloudfront.net/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/p/w/pwb000233759-01.jpg', 
      description: 'ประเภท : DJI SPARK DRONE COMBO',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'iPhone 6s Plus (32GB, สี Rose Gold)',
      image_url: 'https://dfmukn6hiiik1.cloudfront.net/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/P/W/PWB000226127.jpg', 
      description: 'ระบบสัญญาณ : GSM/CDMA/HSPA/EVDO/LTE',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
