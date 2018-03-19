import Controller from './Controllers';

// Set Routes
export const Route = (ControllerName, name) => (req, res, next) => (
  new Controller[ControllerName](req, res, next)[name]()
);

// Middlewares
export { Middleware, ErrorMiddleware } from './Middleware';
