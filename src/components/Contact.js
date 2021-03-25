import React from 'react';

const Contact = () => (
	<main className='about-main'>
		<h1 className='about-heading'>Contact</h1>
		<section className='about-caption-container'>
			<section className='about-caption'>
				<p>Thank you for visiting! I hope you've enojyed my portfolio.</p>
				<p>
					Don't be shy... Reach out! I love coding and creating new things. It
					would be my pleasure to build something with you.{' '}
				</p>
				<p>
					I am currently looking for freelance, part-time, or full-time employment.
				</p>
			</section>
		</section>
			<h2 className='about-heading2'>Contact Info</h2>
		<div className='contact-container'>

			<section className='contact-info'>
				<li>
					<span className='contact-key'>Email:</span>{' '}
					<span className='email'>
						<span>billyhkaufman@gmail.com</span>
					</span>
				</li>
				<li>
					<span className='contact-key'>LinkedIn:</span>{' '}
					<a
						href='https://www.linkedin.com/in/williamhkaufman/'
						target='_blank'
						rel='noopener noreferrer'>
						<span>linkedin.com/in/williamhkaufman</span>
					</a>
				</li>
				<li>
					<span className='contact-key'>Github:</span>{' '}
					<a
						href='https://github.com/billyhk'
						target='_blank'
						rel='noopener noreferrer'>
						<span>github.com/billyhk</span>
					</a>
				</li>
			</section>
		</div>
	</main>
);
export default Contact;
