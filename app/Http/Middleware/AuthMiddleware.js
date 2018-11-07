import jwtDecode from 'jwt-decode';
import { Middleware } from '../Kernel';
import User from '../../Models/User';

class AuthMiddleware extends Middleware {
  async getAuth() {
    // provide the data that was used to authenticate the request; if this is
    // not set then no attempt to authenticate is registered.
    const token = this.request.get('Authorization');
    try {
      let user = {};
      if (token) {
        const decoded = await jwtDecode(token);
        user = await User.collection()
          .query({ where: { email: decoded.email } })
          .fetchOne();
      }
      if (user.attributes) {
        this.request.auth = () => ({
          isAuth: true,
          user: user.attributes,
        });
      } else {
        this.request.auth = () => ({
          isAuth: false,
          user: {},
        });
      }
      this.next();
    } catch (error) {
      console.log(error)
      this.request.auth = () => ({
        isAuth: false,
        user: {},
      });
      this.next();
    }
  }
}

export default AuthMiddleware;
