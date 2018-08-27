import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { Vote } from './Vote';

export const Product = new GraphQLObjectType({
  name: 'products',
  description: 'Detail of The product',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Name of the product',
    },
    price: {
      type: GraphQLInt,
      description: 'price of product',
    },
    category: {
      type: new GraphQLList(GraphQLString),
      description: 'category of product',
    },
    vote: {
      type: new GraphQLList(Vote),
      description: 'vote of product',
    },
  }),
});
