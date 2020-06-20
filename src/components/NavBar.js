import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className='nav-container'>
			<ul className='nav-left'>
				<li>
					<Link to='/'>home</Link>
				</li>
				<li>
					<Link to='about'>about me</Link>
				</li>
				<li>
					<Link to='projects'>projects</Link>
				</li>
				<li>
					<Link to='contact'>contact</Link>
				</li>
			</ul>
			<ul className='nav-right'>
				<a href='https://github.com/billyhk'>
					<li>
						<FaGithub />
					</li>
				</a>
				<a
					href='https://www.linkedin.com/in/williamhkaufman/'
					target='_blank'
					rel='noopener noreferrer'>
					<li>
						<FaLinkedin />
					</li>
				</a>
				<a href='mailto:billyhkaufman@outlook.com'>
					<li>
						<FaEnvelope />
					</li>
				</a>
			</ul>
		</div>
	);
};

export default NavBar;
