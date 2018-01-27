const URIs = {
	development: 'mongodb://localhost/mydb',
	test: 'mongodb://localhost/testdb',
	mlab: 'mongodb://aseds4:pass4@ds061360.mlab.com:61360/mydb',
};

export default function _config(ENV) {
	const config = {
		mongo: {
			URI: URIs['development'],
			debugFlag: false,
		},
		app: {
			morganFlag: true,
		},
	};

	return config;
}