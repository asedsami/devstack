import hello from '../Query/hello';
import { GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
	name: 'Mutation',
	description: 'Root Query object',
	fields: ()=> ({
		hello,
	}),
});