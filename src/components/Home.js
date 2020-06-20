import React from 'react';
import '../index.css';

const Home = () => (
	<>
		<main className='home-main'>
			<div className='home-title'>
				<h1>Billy Kaufman</h1>
				<h2>Software Engineer</h2>
			</div>
			<footer>
				<p className='home-caption'>
					Hi, my name is Billy. I create{' '}
					<span className='stylish'>stylish</span>,{' '}
					<span className='modern'>modern</span>,{' '}
					<span className='functional'>functional</span> websites to serve any
					purpose for your business.
				</p>
			</footer>
		</main>
	</>
);

export default Home;
