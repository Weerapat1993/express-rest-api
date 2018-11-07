import _ from 'lodash';
import jwt from 'jsonwebtoken';
import User from '../../Models/User';
import { Controller } from './Controller';

class UserController extends Controller {
  constructor(req, res, next) {
    super(req, res, next);
    this.primaryKey = 'id';
    this.Model = User;
  }

  login() {
    const { email, password } = this.request.body;
    this.Expectation(async () => {
      const user = await this.Model
        .collection()
        .query({ where: { email } })
        .fetchOne();
      if (user) {
        const payload = { email };
        const token = jwt.sign(payload, 'secret');
        if (user.password !== password) {
          await this.getSuccess(500, 'Username or Password is not correct.');
        } else {
          await this.getSuccess(200, { token, user });
        }
      } else {
        await this.getFailure(500, 'User not Found.');
      }
    });
  }

  createData() {
    const { email } = this.request.body;
    this.Expectation(async () => {
      const user = await this.Model
        .collection()
        .query({ where: { email } })
        .fetchOne();
      if (user) {
        const payload = { email };
        const token = jwt.sign(payload, 'secret');
        await this.getSuccess(200, { token, user });
      } else {
        this.postData(this.request.body);
      }
    });
  }

  postData(body) {
    this.Model.create(body)
      .then((data) => {
        const payload = { email: data.email };
        const user = data;
        const token = jwt.sign(payload, 'secret');
        this.getSuccess(201, { token, user });
      })
      .catch((error) => {
        const err = _.get(error, 'details.0.message', 'Error');
        this.getFailure(400, err);
      });
  }

  getAuthResponse() {
    this.getSuccess(200, this.request.auth().user);
  }
}

export default UserController;
