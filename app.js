import express from 'express';
import path from 'path';
import cors from 'cors';
import favicon from 'serve-favicon';
// import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import hash from 'object-hash';
import querystring from 'querystring';
import { Schema } from './database/graphql/schema';
import { ErrorMiddleware } from './app/Http/Middleware';

import web from './routes/web';
import api from './routes/api';

// App Express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/assets', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

/**
 * Enable shortlinks in the terminal  which will automatically
 * take you to graphiql editor pre-filled with data.
 */
if (process.env.NODE_ENV === 'development') {
  const queryLog = {};

  // parses shortlinks and redirects to the GraphiQL editor
  app.use('/goto', (req, res) => {
    const { id } = req.query;
    if (!queryLog[id]) {
      console.error('Failed to find a stored query');
      return res.status(404).end();
    }
    return res.redirect(queryLog[id]);
  });

  // peeks at incoming /graphql requests and builds shortlinks
  app.use('/graphql', (req, res, next) => {
    const { query, variables } = req.body;
    const queryParams = querystring.stringify({
      query,
      variables: JSON.stringify(variables),
    });
    // hash query into id so that identical queries occupy
    // the same space in the queryLog map.
    const id = hash({ query, variables });
    queryLog[id] = `${process.env.APP_URL}/graphql?${queryParams}`;
    console.log(
      'Query was made, inspect:',
      `${process.env.APP_URL}/goto?id=${id}`,
    );
    // finally pass requests to the actual /graphql endpoint
    next();
  });
}

app.use('/', web);
app.use('/api', api);
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(ErrorMiddleware);

module.exports = app;
