import React, { useRef } from 'react'
import { GalleryImages } from './ProjectGalleryImages'
import Gallery from 'react-grid-gallery'

// import local images
// import statements from '../component-images/statements.png';
// import fire from '../component-images/fire.png';
// import recipes from '../component-images/recipe-searcher.png';
// import simon from '../component-images/simon.png';

const Projects = ({ referenceEl }) => {
  const galleryDivStyles = {
    display: 'block',
    minHeight: '1px',
    width: '300px',
    margin: '0',
    padding: '0',
  }

  return (
    <main className='about-main'>
      <div
        className='nav-to-top'
        onClick={() =>
          referenceEl.current?.scrollTo({ top: 0, behavior: 'smooth' })
        }>
        <span>^</span>
      </div>

      <h1 className='about-heading'>
        My Projects
        <br />
        <span className='about-heading-subtitle-click'>
          (Click on images to view more)
        </span>
      </h1>
      <h2 className='about-heading2'>The Finishing Gourmet</h2>
      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['thefinishinggourmet']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='http://thefinishinggourmet.gretrix.com'
                target='blank'
                rel='noopener noreferrer'>
                Deployed Demo URL
              </a>
            </li>
          </section>
          <section>
            <li>Description:</li>
            <ul className='project-sublist'>
              <li>
                WordPress migration for Los Angeles high-class eats distributor{' '}
                <span style={{ fontStyle: 'italic' }}>
                  The Finishing Gourmet
                </span>
                .
              </li>
              <li>eCommerce functionality with WordPress/Divi + WooCommerce</li>
              <li>CSS / JavaScript / PHP</li>
            </ul>
          </section>
        </ul>
      </div>

      <h2 className='about-heading2'>The Chamber Collective</h2>
      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['nucalm']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://chambercollective-demo.herokuapp.com'
                // href='http://thechambercollective.co/'
                target='blank'
                rel='noopener noreferrer'>
                Deployed URL
              </a>
            </li>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://github.com/billyhk/chambercollective-promotional'
                target='blank'
                rel='noopener noreferrer'>
                Github
              </a>
            </li>
          </section>
          <section>
            <li>Description:</li>
            <ul className='project-sublist'>
              <li>
                Promotional vehicle for Fitness Tech startup{' '}
                <span style={{ fontStyle: 'italic' }}>
                  The Chamber Collective
                </span>
                . This app utilized the Hubspot API to collect visitors' name
                and email from form-data.
              </li>
              <li>
                Media hosting with AWS / S3; dynamic resizing with Thumbor
              </li>
              <li>React / SCSS / React-Router</li>
            </ul>
          </section>
        </ul>
      </div>
      <h2 className='about-heading2'>Joel Spector</h2>
      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['jspect']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              {/* <a href='#' target='blank' rel='noopener noreferrer'> */}
              Deployed Link Coming Soon!
              {/* </a> */}
            </li>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://github.com/billyhk/joel-spector-frontend'
                target='blank'
                rel='noopener noreferrer'>
                Github (front-end)
              </a>
            </li>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://github.com/spectorari/jspect-backend'
                target='blank'
                rel='noopener noreferrer'>
                Github (back-end)
              </a>
            </li>
          </section>
          <section>
            <li>Description:</li>
            <ul className='project-sublist'>
              <li>
                Digital art gallary for New England artist,{' '}
                <span style={{ fontStyle: 'italic' }}>Joel Spector</span>.
              </li>
              <li>React / CSS / Material-Design-Bootstrap</li>
              <li>Java Spring Boot / MySQL / Spring Security / JWT</li>
            </ul>
          </section>
        </ul>
      </div>

      <h2 className='about-heading2'>Statements</h2>
      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['statements']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://statements-frontend.herokuapp.com'
                target='blank'
                rel='noopener noreferrer'>
                Deployed URL
              </a>
            </li>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://github.com/billyhk/statements_frontend/blob/master/README.md'
                target='blank'
                rel='noopener noreferrer'>
                Github (front-end)
              </a>
            </li>
            <li className='project-link'>
              &#8674;{' '}
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
              <li>
                Financial statement generator that accounts for 28 transation
                types. Based on a book by Thomas Ittelson,{' '}
                <span style={{ fontStyle: 'italic' }}>
                  Financial Statements: A Step-by-Step Guide to Understanding
                  and Creating Financial Reports
                </span>
                .
              </li>
              <li>React / CSS / Bootstrap-React</li>
              <li>Python / Django / PostgreSQL</li>
              <li>Authentication with JWT</li>
            </ul>
          </section>
        </ul>
      </div>
      {/* <h2 className='about-heading2'>f i r e</h2>

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
		</div> */}

      <h2 className='about-heading2'>Recipe Searcher</h2>
      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['recipe']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://recipe-searcher-2020.herokuapp.com'
                target='_blank'
                rel='noopener noreferrer'>
                Deployed URL
              </a>
            </li>
            <li className='project-link'>
              &#8674;{' '}
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
              <li>
                Search engine for recipes of all kinds. Queries are flexible to
                allow search by recipe title, ingredient, category, and dietary
                restriction (i.e. 'vegan', 'vegetarian', 'paleo', 'dairy free').
              </li>
              <li>
                Utilized 3rd Party API:{' '}
                <a
                  href='https://spoonacular.com/food-api'
                  target='blank'
                  rel='noopener noreferrer'>
                  Spoonacular
                </a>
              </li>
              <li>Theme-based styling with Bootstrap / Bootswatch</li>
              <li>React / CSS / React-Router</li>
            </ul>
          </section>
        </ul>
      </div>

      <h2 className='about-heading2'>Simon</h2>
      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['simon']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://simon-game-2020.herokuapp.com'
                target='blank'
                rel='noopener noreferrer'>
                Deployed URL
              </a>
            </li>
            <li className='project-link'>
              &#8674;{' '}
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
              <li>
                JavaScript clone of 1978 handheld eletronic game,{' '}
                <span style={{ fontStyle: 'italic' }}>SIMON</span>. This app
                generates and stores random sequence to facilitate turn-based
                gameplay.
              </li>
              <li>Sounds composed in Logic Pro / Audacity</li>
              <li>HTML / CSS / JavaSript / PHP</li>
            </ul>
          </section>
        </ul>
      </div>
      <h2 className='about-heading2'>This Portfolio Page</h2>

      <div className='project-container'>
        <div style={galleryDivStyles}>
          <Gallery
            images={GalleryImages['portfolio']}
            enableImageSelection={false}
          />{' '}
        </div>
        <ul className='project-description-list'>
          <section>
            <li className='project-link'>
              &#8674;{' '}
              <a
                href='https://github.com/billyhk/billykaufman'
                target='blank'
                rel='noopener noreferrer'>
                Github
              </a>
            </li>
          </section>
          <section>
            <li>Description:</li>
            <ul className='project-sublist'>
              <li>
                Personal web page to display my updated contact info and some of
                my past projects. This is a also space for me to experiment with
                UI / UX design and implementation.
              </li>

              <li>
                React / CSS / React-Grid-Gallery / React-Icons / React-Router
              </li>
            </ul>
          </section>
        </ul>
      </div>
    </main>
  )
}

export default Projects
