import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

import '../index.css';

const About = () => (
	<>
		<main className='about-main'>
			<h1 className='about-heading'>About Me</h1>
			<section className='about-caption-container'>
				<p className='about-caption'>
					Hi, my name is Billy. I create{' '}
					<span className='stylish'>stylish</span>,{' '}
					<span className='modern'>modern</span>,{' '}
					<span className='functional'>functional</span> websites to serve any
					purpose for your business. I am committed to holding my work to a high
					standard, from <span className='total-design'>total design</span> to
					the <span className='finest-details'>finest details</span>.
				</p>
				<p className='about-caption'>
					I studied software engineering at{' '}
					<a
						className='g-a-link'
						href='https://generalassemb.ly/'
						target='_blank'
						rel='noopener noreferrer'>
						General Assembly
					</a>
					, and have a background in music with international performance
					experience and a{' '}
					<a
						className='doctorate'
						href='https://scholarship.miami.edu/esploro/outputs/doctoral/Utilizing-Select-Project-Management-Techniques-to-Excel-in-Professional-Percussion-Auditions/991031524184102976'>
						doctorate
					</a>
					! As an orchestral percussionist, I have enjoyed the creative process
					of mastering a skill. I hold the same ambition as a programmer.
				</p>
				<h2 className='about-heading2'>Skills</h2>
				<ul className='skills-list'>
					<li>HTML</li>
					<li>CSS / SASS</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>PHP</li>
					<li>Node</li>
					<li>Express</li>
					<li>MongoDB</li>
					<li>Git / Github</li>
					<li>SQL</li>
					<li>Python</li>
					<li>Django</li>
					<li>WordPress</li>
					<li>Google Analytics</li>
					<li>Google Tag Manager</li>
					<li>Amazon Web Services</li>
				</ul>
			</section>
			<h2 className='about-heading3'>Download My Resume</h2>
			<a
				className='resume-link'
				href='https://drive.google.com/file/d/1GlmTgBXbwoDIYj3K_kiOMu444pk1Uo-u/view?usp=sharing'
				target='_blank'
				rel='noopener noreferrer'>
				<FaFilePdf />
			</a>
		</main>
	</>
);

export default About;
