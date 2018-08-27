import { GraphQLObjectType, GraphQLInt } from 'graphql';

export const Vote = new GraphQLObjectType({
  name: 'vote',
  description: 'vote of The product',
  fields: () => ({
    star: {
      type: GraphQLInt,
      description: 'one_star of the vote',
    },
    men: {
      type: GraphQLInt,
      description: 'men of vote',
    },
    women: {
      type: GraphQLInt,
      description: 'women of vote',
    },
  }),
});
