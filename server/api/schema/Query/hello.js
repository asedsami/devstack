import { GraphQLString } from 'graphql';

const hello = {
	type: GraphQLString,
	description: 'A heelo world string',
	resolve() {
		return 'Hello World from GraphQL!';
	},	
};

export default hello;