import Joi from 'joi';
import ModelBase from '../../config/database';

/** @type {Model} */
const User = ModelBase.extend({
  tableName: 'users',

  validate: {
    email: Joi.string().required(),
    name: Joi.string(),
    avatar: Joi.string(),
    password: Joi.string(),
  },
});

export default User;
