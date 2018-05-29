const template = (Element) => `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>template.js</title>
	</head>
	<body>
		<div id='root'>${Element}</div>
		<script src='/client.bundle.js'></script>
		<script src="/socket.io/socket.io.js"></script>
		<script src='/socketstuff.js'></script>
	</body>
	</html>
`;

export default template;