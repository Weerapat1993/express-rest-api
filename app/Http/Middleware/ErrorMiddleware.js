import { codeStatus } from '../Kernel';

const ErrorMiddleware = (err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err);
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // response status code
  const code = err.status || 404;
  res.status(code);

  // render the error page
  // res.render('error');

  // response json error
  res.send({
    error: 'Not Found',
    code,
    status: codeStatus(code),
  });
};

export default ErrorMiddleware;
