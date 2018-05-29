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
		<script>
			console.log('templates.js');	
			var socket = io.connect('http://localhost:3000');
		</script>
	</body>
	</html>
`;

export default template;