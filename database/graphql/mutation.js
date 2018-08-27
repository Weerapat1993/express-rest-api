import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import { Product } from './models/Product';
import data from './data';

export const Mutation = new GraphQLObjectType({
  name: 'mutationProduct',
  description: 'mutation of product',
  fields: () => ({
    addProduct: {
      type: new GraphQLList(Product),
      args: {
        name: {
          type: GraphQLString,
        },
        price: {
          type: GraphQLInt,
        },
        category: {
          type: new GraphQLList(GraphQLString),
        },
      },
      resolve: (_, args) => {
        const product = {
          name: args.name,
          price: args.price,
          category: args.category,
        };
        data.push(product);
        return data;
      },
    },
    deleteProduct: {
      type: new GraphQLList(Product),
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => data.filter(product => product.name !== args.name),
    },
  }),
});
