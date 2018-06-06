import graphqlHTTP from 'express-graphql';
import schema from './schema';
import expressJWT from 'express-jwt';

export const jwtAuth = expressJWT({
	secret: 'loginSecretToBeReplaced',
	credentialsRequired: false,
});

const root = {
	ip(args, req) {
		return req.ip;
	}
};

export const graphQL = graphqlHTTP(req => ({
	schema,
	rootValue: root,
	context: {
		user: req.user
	}
})); 

export const graphiQL = graphqlHTTP(req => ({
	schema,
	rootValue: root,
	graphiql: true,
	context: {
		user: req.user
	}
})); 