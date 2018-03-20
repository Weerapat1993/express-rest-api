import { Controller } from './Controller';

/**
 * @api {get} /home GET Home
 * @apiSampleRequest /api/home
 * @apiName GetHome
 * @apiGroup Home
 */

class HomeController extends Controller {
  index() {
    const data = 'Hello World';
    this.getSuccess(200, data);
  }
}

export default HomeController;
