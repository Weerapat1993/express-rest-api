import Product from '../../Models/Product';
import { Controller } from './Controller';

class ProductController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Product;
  }
}

export default ProductController;
