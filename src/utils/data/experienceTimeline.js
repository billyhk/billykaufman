import React, { Fragment } from 'react'
import { Bookmarklet } from '../../components/atoms/svg'
import ruckusLogoSvg from '../../component-images/ruckusLogoSvg.svg'
import gretrixLogo2 from '../../component-images/gx-logo.png'
import gretrixLogo3 from '../../component-images/Gx_Logo_Horz.svg'
import lookFarLogo from '../../component-images/lf-logo-512.png'
import lookFarLogoCrop from '../../component-images/lf-logo-512-crop.png'
import lookFarLogoSm from '../../component-images/lfl-logo-sm.png'
import gaLogo from '../../component-images/ga-logo-gear.png'
import gaLogoCrop from '../../component-images/ga-logo-gear-cropped.png'
import umLogo from '../../component-images/um-logo.jpg'
import umLogoLg from '../../component-images/umLogoLg.jpg'

export const experienceData = [
  // {
  //   Icon: <GrTechnology />,
  //   iconBackgroundColor: '#f1fffa',
  //   backgroundColor: '#f1fffa',
  //   textColor: '',
  //   title: <h3 className='vertical-timeline-element-title'>What's Next?</h3>,
  //   description1: (
  //     <span>
  //       Keeping up with current technologies and design trends. <br />
  //       Continuing to further my knowledgebase for the love of software design!
  //     </span>
  //   ),
  //   description2: '',
  //   dateRange: `${new Date().getFullYear()} and beyond!`,
  // },
  {
    institutionName: 'Ruckus Marketing',
    Icon: (
      <svg viewBox='0 0 68 63.783'>
        <g data-name='Group 4921'>
          <path
            data-name='Path 40349'
            d='M68 63.783H0V0h68zm-6.8-26.492l-7.395-7.4 7.4-9.94-9.722-13.138H6.798v50.129l12.891-7.4v-14.27h24.669l3.95 3.877v10.4H61.2zM44.5 25.536H19.689v-9.2h24.864l3.39 4.492z'
            fill='#fff'></path>
        </g>
      </svg>
    ),
    iconBackgroundColor: '#ff8300',
    backgroundColor: '#ffbd00',
    textColor: '',
    Image: <img alt='' src={ruckusLogoSvg} className='logo-padding' />,
    title: 'Front-End Software Engineer (current position)',
    description1:
      'NYC-based agency that is contracted to deliiver web applications developed with React, Wordpress, and Shopify. We handle a variety of projects from the e-commerce space to those that are purely informational.',
    description2:
      'I work closely with project managers, backend developers, and our internal design team to produce modern web applications with React that are as pleasant to use as they are aesthetically captivating.',
    dateRange: 'Oct 2021 - Present',
  },
  {
    institutionName: 'Look Far Labs',
    Icon: (
      <img
        style={{
          borderRadius: '50%',
          transform: 'translateY(-0.25rem)',
        }}
        alt=''
        src={lookFarLogoSm}
        width='100%'
      />
    ),
    iconBackgroundColor: '#fff',
    backgroundColor: '#ddd',
    textColor: '',
    Image: (
      <Fragment>
        <img alt='' src={lookFarLogo} className='responsiveImgLg' />
        <img alt='' src={lookFarLogoCrop} className='responsiveImgSm' />
      </Fragment>
    ),
    title: 'React / TypeScript Developer',
    description1:
      'I was contracted by Look Far Labs (LFL) to build the front-end of a two-way purchasing agent with ReactJS and TypeScript. ',
    description2: (
      <span>
        This web app was called <em>The Collective</em> -- a newtwork of users
        who can post and/or rent instruments of construction. Excavators,
        Backhoes, Hydraulic Drills. If you can name it, it can be posted and
        requisitioned.
      </span>
    ),
    dateRange: 'April 2021 - Oct 2021',
  },
  {
    institutionName: 'Gretrix',
    Icon: (
      <img
        style={{
          borderRadius: '50%',
          transform: 'translateY(-0.1rem)',
        }}
        alt=''
        src={gretrixLogo2}
        width='100%'
      />
    ),
    iconBackgroundColor: '',
    backgroundColor: '#b2dbef',
    textColor: '',
    Image: <img alt='' src={gretrixLogo3} className='logo-padding' />,
    title: 'Front-End Engineer',
    description1:
      'Agency based in Atlanta that handles various web-development business needs, from troubleshooting web-app performance issues, to making custom e-commerce solutions with Shopify and Wordpress, to tracking user behavior with Google Tag Manager.',
    description2:
      'As a front-end dev, I was responsible for a significant volume of JavaScript development, such as implementing complex animations, integrating CRMs with form-based webpages, and custom tag-management. Some of my JavaScript tags are currently in production for large-scale clients, such as Johnson & Johnson, Chrysler, and Key Bank.',
    dateRange: 'Feb 2021 - Oct 2021',
  },
  {
    institutionName: 'Freelancing, Projects, Study',
    Icon: <Bookmarklet className='bookmarkletSvgIcon' fill='#fff' />,
    iconBackgroundColor: '#fd23de',
    backgroundColor: '#fff',
    textColor: '',
    Image: '',
    title: 'Freelance Web Developer',
    description1:
      'As a fresh graduate from a coding bootcamp, I quickly learned that I had to take the initiative in order to take my skills to the next level.',
    description2:
      'So, I did whatever I could to make up for my lack of a computer science degree, like practicing data strutures & algorithms, reading textbooks, and freelancing to start gaining Web-Dev XP.',
    dateRange: 'June 2020 - Feb 2021',
  },
  {
    institutionName: 'General Assembly',
    Icon: (
      <img alt='' src={gaLogoCrop} width='100%' className='timeline__ga-icon' />
    ),
    iconBackgroundColor: '#fff',
    backgroundColor: '#ffe2e3',
    textColor: '',
    Image: (
      <Fragment>
        <img alt='' src={gaLogo} className='responsiveImgLg logo-padding' />
        <img alt='' src={gaLogoCrop} className='responsiveImgSm logo-padding' />
      </Fragment>
    ),
    title: 'Full Stack Software Engineering Bootcamp (remote)',
    description1:
      'Full-time, fully-emersive education in the skills required to be a pro software engineer.',
    description2: (
      <span>
        This web-dev centric bootcamp taught me the fundamentals of programming
        beyond the syntax, and introduced me to many critical areas in the CS
        space. From the moment I started at{' '}
        <a
          className='ga-link-sei'
          href='https://generalassemb.ly/education/software-engineering-immersive/new-york-city?ga_campaign=immersive-remote&amp;ga_variation=sei-tile'
          target='_blank'
          rel='noopener noreferrer'>
          GA
        </a>
        , I was hooked on this never-ending and ever-evolving discipline.
      </span>
    ),
    dateRange: 'March 2020 - June 2020',
  },
  {
    institutionName: 'University of Miami (FL)',
    Icon: (
      <img alt='' src={umLogo} width='100%' className='timeline__um-icon' />
    ),
    iconBackgroundColor: '#000',
    backgroundColor: '#dce5df',
    textColor: '',
    Image: <img alt='' src={umLogoLg} className='logo-padding' />,
    title: 'Doctor of Music',
    description1:
      'After many years of studying classical percussion, I achieved a doctorate in the field of music performance.',
    description2: (
      <Fragment>
        My{' '}
        <a
          className='dissertation'
          href='https://scholarship.miami.edu/esploro/outputs/doctoral/Utilizing-Select-Project-Management-Techniques-to-Excel-in-Professional-Percussion-Auditions/991031524184102976'
          target='_blank'
          rel='noopener noreferrer'>
          dissertation
        </a>{' '}
        was about getting SUPER organized for complicated and nuanced projects
        (i.e. Auditions). Developing that kind of creative and highly-structured
        mindset was about to influence me in a major way...
      </Fragment>
    ),
    dateRange: '2017 (coursework) / 2020 (final defense)',
  },
]
