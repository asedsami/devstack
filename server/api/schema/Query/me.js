import { User } from '../typeDefs';

const me = {
	type: User,
	resolve(root, args, {user}) {
		return {_id: "some id"};
	}
}