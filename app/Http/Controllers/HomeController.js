import faker from 'faker';
import { Controller } from './Controller';

/**
 * @api {get} /home GET Home
 * @apiSampleRequest /api/home
 * @apiName GetHome
 * @apiGroup Home
 */

class HomeController extends Controller {
  index() {
    const data = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
    };
    this.getSuccess(200, data);
  }
}

export default HomeController;
