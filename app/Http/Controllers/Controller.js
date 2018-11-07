import { BaseController } from '../Kernel';

export class Controller extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = null;
    this.query = () => {};
  }

  getList() {
    this.Expectation(async () => {
      const lists = await this.Model
        .collection()
        .query((qb) => {
          this.query(qb);
        })
        .fetch();
      await this.getSuccess(200, lists);
    });
  }

  getByID(statusCode, id) {
    const paramID = id || this.request.params.id;
    this.Expectation(async () => {
      const data = await this.Model
        .collection()
        .query((qb) => {
          this.query(qb);
          return { where: { [this.primaryKey]: paramID } };
        })
        .fetchOne();
      if (data) {
        await this.getSuccess(statusCode || 200, data);
      } else {
        const error = 'Data is not found.';
        await this.getFailure(404, error);
      }
    });
  }

  postByID() {
    const { body } = this.request;
    this.Model.create(body)
      .then((data) => {
        this.getSuccess(201, data);
      })
      .catch((error) => {
        const err = _.get(error, 'details.0.message', 'Error');
        this.getFailure(400, err);
      });
  }

  updateByID() {
    const { body } = this.request;
    this.Model.update(body, { [this.primaryKey]: body.id })
      .then((data) => {
        this.getSuccess(200, data);
      })
      .catch((error) => {
        const err = _.get(error, 'details.0.message', 'Error');
        this.getFailure(400, err);
      });
  }

  deleteByID() {
    const { body } = this.request;
    this.Model.destroy(body)
      .then(() => {
        this.getSuccess(202, body);
      })
      .catch((error) => {
        const err = _.get(error, 'details.0.message', 'Error');
        this.getFailure(400, err);
      });
  }
}
