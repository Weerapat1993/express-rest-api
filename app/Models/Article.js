import Joi from 'joi';
import ModelBase from '../../config/database';

/** @type {Model} */
const Article = ModelBase.extend({
  tableName: 'articles',

  validate: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    user_id: Joi.number().required(),
  },
});

export default Article;
