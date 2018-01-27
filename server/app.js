import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import _config from './_config';
import connectToDB from './connectToDB';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import template from './template';

const {log} = console;
const config = _config(process.env);

const AppString = renderToString(<App />);

// throw new Error('Server Error');

connectToDB(config.mongo);
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', 'views');

if(config.app.morganFlag)
	app.use(morgan('dev'));

app.get('/', (req, res, nx)=> {
	const document = template(AppString);
		res.send(document);
})

export default app;
