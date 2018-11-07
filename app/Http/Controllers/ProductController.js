import Product from '../../Models/Product';
import { Controller } from './Controller';

/**
 * @api {get} /products GET Product Lists
 * @apiSampleRequest /api/products
 * @apiName GetProducts
 * @apiGroup Product
 */

/**
 * @api {get} /products/:id GET Product By ID
 * @apiSampleRequest /api/products/product:1
 * @apiName GetProductByID
 * @apiGroup Product
 */

class ProductController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Product;
  }
}

export default ProductController;
