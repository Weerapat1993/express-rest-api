import fs from 'fs-extra';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

export const Schema = makeExecutableSchema({
  typeDefs: fs.readFileSync('./database/graphql/schema.graphql', 'utf8'),
  resolvers,
});
