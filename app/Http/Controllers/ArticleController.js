import Article from '../../Models/Article';
import User from '../../Models/User';
import { Controller } from './Controller';

/**
 * @api {get} /articles GET Article Lists
 * @apiSampleRequest /api/articles
 * @apiName GetArticles
 * @apiGroup Article
 */

/**
 * @api {get} /articles/:id GET Article By ID
 * @apiSampleRequest /api/articles/article:1
 * @apiName GetArticleByID
 * @apiGroup Article
 */

class ArticleController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = Article;
    this.query = (qb) => {
      qb.innerJoin('users', 'users.id', 'articles.user_id');
      qb.select('articles.*', 'users.name as user_name', 'users.avatar');
    };
    this.tableName = 'articles';
    this.isJoin = true;
  }

  postByID() {
    const { body } = this.request;
    this.Expectation(async () => {
      const data = await this.Model.create(body);
      const user = await User.findById(data.attributes.user_id);
      const { name, avatar } = user.attributes;
      const dataResponse = {
        ...data.attributes,
        user_name: name,
        avatar,
      };
      this.getSuccess(201, dataResponse);
    });
  }

  updateByID() {
    const { body } = this.request;
    this.Expectation(async () => {
      const data = await this.Model.update(body, { [this.primaryKey]: body.id });
      const user = await User.findById(data.attributes.user_id);
      const { name, avatar } = user.attributes;
      const dataResponse = {
        ...data.attributes,
        user_name: name,
        avatar,
      };
      this.getSuccess(200, dataResponse);
    });
  }
}

export default ArticleController;
