import { GraphQLID, GraphQLObjectType } from 'graphql'

const User = new GraphQLObjectType({
	name: 'User',
	description: 'This represents a User',
	fields: ()=> ({
		_id: {
			type: GraphQLID,
			resolve(user) {
				return user._id;
			}
		}
	})
});

export default User;