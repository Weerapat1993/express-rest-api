import { Controller } from './Controller';
import data from './data/data.json';

/**
 * @api {get} /home GET Home
 * @apiSampleRequest /api/home
 * @apiName GetHome
 * @apiGroup Home
 */

class JsonController extends Controller {
  index() {
    this.response.json(data);
  }
}

export default JsonController;
