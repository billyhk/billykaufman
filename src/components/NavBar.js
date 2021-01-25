import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const NavBar = () => {
	const [open, setOpen] = useState(false);

	const toggleSide = () => {
		setOpen(!open);
	};

	return (
		<div className='nav-container'>
			<p className='hamburger-icon' onClick={toggleSide}>
				{!open ? '☰' : '×'}
			</p>{' '}
			<nav
				className='side-nav'
				id={open ? 'open' : 'closed'}
				onClick={toggleSide}>
				<div className='sidebar-links'>
					<Link to='/'>home</Link>

					<Link to='about'>about</Link>

					<Link to='projects'>projects</Link>

					<Link to='contact'>contact</Link>
				</div>
			</nav>
			<ul className='nav-left'>
				<li>
					<Link to='/'>home</Link>
				</li>
				<li>
					<Link to='about'>about</Link>
				</li>
				<li>
					<Link to='projects'>projects</Link>
				</li>
				<li>
					<Link to='contact'>contact</Link>
				</li>
			</ul>
			<ul className='nav-right'>
				<a
					href='https://github.com/billyhk'
					target='_blank'
					rel='noopener noreferrer'>
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
