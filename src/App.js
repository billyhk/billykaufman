import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';

//route components
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';

import ScrollToTop from './components/utils/ScrollToTop.js';

function App() {



	return (
		<ScrollToTop>
			<NavBar />
			<main>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/projects' component={Projects} />
				<Route exact path='/contact' component={Contact} />
			</main>
			<div className='about-footer'>
				<p>{'\u00A9 Billy Kaufman 2021'}</p>
			</div>
		</ScrollToTop>
	);
}

export default App;