import { Controller } from './Controller';

class HomeController extends Controller {
  index() {
    const data = 'Hello World';
    this.getSuccess(200, data);
  }
}

export default HomeController;
