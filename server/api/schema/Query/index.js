import me from './me';
import hello from './hello';
import { GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query object',
	fields: ()=> ({
		me,
		hello,
	}),
});