import React from 'react';

// import local images
import statements from '../component-images/statements.png';
import fire from '../component-images/fire.png';
import recipes from '../component-images/recipe-searcher.png';
import simon from '../component-images/simon.png';

const Projects = () => (
		<main className='about-main'>
			<h1 className='about-heading'>My Projects</h1>

			<h2 className='about-heading2'>Statements</h2>
			<div className='project-container'>
				<img
					alt='statements-financial-statement'
					src={statements}
					width='100%'
				/>
				<ul className='project-description-list'>
					<section>
						<li>
							<a
								href='https://statements-frontend.herokuapp.com'
								target='blank'
								rel='noopener noreferrer'>
								Deployed URL
							</a>
						</li>
						<li>
							<a
								href='https://github.com/billyhk/statements_frontend/blob/master/README.md'
								target='blank'
								rel='noopener noreferrer'>
								Github (front-end)
							</a>
						</li>
						<li>
							<a
								href='https://github.com/trental/statements_backend'
								target='blank'
								rel='noopener noreferrer'>
								Github (back-end)
							</a>
						</li>
					</section>
					<section>
						<li>Description:</li>
						<ul className='project-sublist'>
							<li>React/CSS/Bootstrap-React</li>
							<li>Python/Django/PostgresSQL</li>
							<li>Authentication with JWT</li>
						</ul>
					</section>
				</ul>
			</div>
			<h2 className='about-heading2'>f i r e</h2>

			<div className='project-container'>
				<img alt='fire-home' src={fire} width='100%' />
				<ul className='project-description-list'>
					<section>
						<li>
							<a
								href='https://fire-explorer-frontend.herokuapp.com'
								target='blank'
								rel='noopener noreferrer'>
								Deployed URL
							</a>
						</li>
						<li>
							<a
								href='https://github.com/billyhk/fire-frontend'
								target='blank'
								rel='noopener noreferrer'>
								Github (front-end)
							</a>
						</li>
						<li>
							<a
								href='https://github.com/andresaugusto/FIRE-back'
								target='blank'
								rel='noopener noreferrer'>
								Github (back-end)
							</a>
						</li>
					</section>

					<section>
						<div className='project-sublist-container'>
							<li>Description:</li>
							<ul className='project-sublist'>
								<li>MERN stack</li>
								<li>Unit Testing with Jest, Enzyme, Mocha, and Chai</li>
								<li>Responsive mobile-first design</li>
							</ul>
						</div>
					</section>
				</ul>
			</div>

			<h2 className='about-heading2'>Recipe Searcher</h2>
			<div className='project-container'>
				<img alt='statements-financial-statement' src={recipes} width='100%' />
				<ul className='project-description-list'>
					<section>
						<li>
							<a
								href='https://recipe-searcher-2020.herokuapp.com'
								target='_blank'
								rel='noopener noreferrer'>
								Deployed URL
							</a>
						</li>
						<li>
							<a
								href='https://github.com/billyhk/recipe-app'
								target='blank'
								rel='noopener noreferrer'>
								Github
							</a>
						</li>
					</section>
					<section>
						<li>Description:</li>
						<ul className='project-sublist'>
							<li>Built with React Hooks</li>
							<li>
								Utilized 3rd Party API:{' '}
								<a
									href='https://spoonacular.com/food-api'
									target='blank'
									rel='noopener noreferrer'>
									Spoonacular
								</a>
							</li>
							<li>Built with React-Router and Bootstrap stylings</li>
						</ul>
					</section>
				</ul>
			</div>

			<h2 className='about-heading2'>Simon</h2>
			<div className='project-container'>
				<img alt='statements-financial-statement' src={simon} width='100%' />
				<ul className='project-description-list'>
					<section>
						<li>
							<a
								href='https://simon-game-2020.herokuapp.com'
								target='blank'
								rel='noopener noreferrer'>
								Deployed URL
							</a>
						</li>
						<li>
							<a
								href='https://github.com/billyhk/simon-game'
								target='blank'
								rel='noopener noreferrer'>
								Github
							</a>
						</li>
					</section>
					<section>
						<li>Description:</li>
						<ul className='project-sublist'>
							<li>HTML5/CSS/Javacsript</li>
							<li>Automated game engine</li>
							<li>Sounds composed in Logic Pro / Audacity</li>
						</ul>
					</section>
				</ul>
			</div>
		</main>
);

export default Projects;
