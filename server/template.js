const template = (Element) => `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<title>template.js</title>
		<script src='reload/reload.js'></script>
	</head>
	<body>
		<div id='root'>${Element}</div>
		<script src='/client.bundle.js'></script>
	</body>
	</html>
`;

export default template;