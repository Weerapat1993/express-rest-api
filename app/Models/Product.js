// import Joi from 'joi';
import ModelBase from '../../config/database';

/** @type {Model} */
const Product = ModelBase.extend({
  tableName: 'products',

  validate: {
    // email: Joi.string().required(),
    // name: Joi.string(),
    // avatar: Joi.string(),
    // password: Joi.string(),
  },
});

export default Product;
