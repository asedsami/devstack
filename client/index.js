import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';

ReactDOM.hydrate(
	<App />,
	document.getElementById('root')
);