import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';

//route components
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';

function App() {
	return (
		<>
			<NavBar />
			<main>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/projects' component={Projects} />
				<Route exact path='/contact' component={Contact} />
			</main>
		</>
	);
}

export default App;