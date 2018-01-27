import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Home = ()=> (<h1>Home</h1>);
const Roster = ()=> (<h1>Roster</h1>);
const NotFound = ()=> (<h1>NotFound</h1>);

const App = ()=> (
	<main>
		<h1>h1 in App.js and index.html</h1>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>	
				<li><Link to='/roster'>Roster</Link></li>	
				<li><Link to='/hi'>hi</Link></li>	
			</ul>	
		</nav>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/roster' component={Roster}/>
			<Route path='*' component={NotFound}/>
		</Switch>
	</main>
);

export default App;