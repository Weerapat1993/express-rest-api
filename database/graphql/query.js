import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import data from './data';
import { Product } from './models/Product';

export const Query = new GraphQLObjectType({
  name: 'queryProduct',
  description: 'query of product',
  fields: () => ({
    hey: {
      type: GraphQLString,
      resolve: (_, args) => data[0].name,
    },
    getProducts: {
      type: new GraphQLList(Product),
      resolve: (_, args) => data,
    },
    getProductByPrice: {
      type: new GraphQLList(Product),
      args: {
        price: {
          type: GraphQLInt,
        },
      },
      resolve: (_, args) => data.filter(product => product.price <= args.price)
    },
  }),
});
