import { codeStatus } from './codeStatus';

/**
 * @typedef {Object} Request
 * @property {Object} params
 * @property {Object} body
 * @property {Object} query
 * @property {() => ({ user: Object, isAuth: bool })} auth
 *
 * @typedef {Object} Response
 * @property {(json: any) => Response} send
 * @property {(code: number) => Response} status
 * @property {(json: Object) => Response} json
 */
class Middleware {
  /**
   * Class Controller
   * @constructor
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */
  constructor(req, res, next) {
    /** @type {Request} */
    this.request = req;
    /** @type {Response} */
    this.response = res;
    /** @type {Function} */
    this.next = next;
  }

  /**
   * Expect Error
   * @param {Function} callback
   */
  Expectation(callback) {
    try {
      callback();
    } catch (error) {
      this.getFailure(500, error);
    }
  }

  /**
   * Response Success Data
   * @param {number} code
   * @param {*} data
   */
  getSuccess(code, data) {
    const dataResponse = {
      data,
      code,
      status: codeStatus(code),
    };
    this.response.status(code).json(dataResponse);
  }

  /**
   * Response Error Data
   * @param {number} code
   * @param {*} error
   */
  getFailure(code, error) {
    const errorResponse = {
      error,
      code,
      status: codeStatus(code),
    };
    this.response.status(code).send(errorResponse);
  }
}

export default Middleware;
