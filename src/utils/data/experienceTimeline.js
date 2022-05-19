import React, { Fragment } from 'react'

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
import { GiBookmarklet } from 'react-icons/gi'

export const experienceData = [
  {
    institutionName: 'University of Miami (FL)',
    Icon: (
      <img
        alt=''
        src={umLogo}
        width='100%'
        style={{
          borderTopLeftRadius: '10%',
          borderTopRightRadius: '10%',
          borderBottomLeftRadius: '30%',
          borderBottomRightRadius: '30%',
          transform: 'translateY(0.75rem)',
        }}
      />
    ),
    iconBackgroundColor: '#000',
    backgroundColor: 'rgba(	13, 83, 48, 0.15)',
    textColor: '',
    Image: <img alt='' src={umLogoLg} className='logo-padding' />,
    title: 'Doctor of Music',
    description1:
      'After many years of studying music, I achieved a doctorate in the field of music performance.',
    description2: (
      <Fragment>
        My{' '}
        <a
          className='doctorate'
          href='https://scholarship.miami.edu/esploro/outputs/doctoral/Utilizing-Select-Project-Management-Techniques-to-Excel-in-Professional-Percussion-Auditions/991031524184102976'
          target='_blank'
          rel='noopener noreferrer'>
          dissertation
        </a>{' '}
        was about getting SUPER organized for complicated and nuanced projects.
        That kind structured mindset was about to influence me in a major way...
      </Fragment>
    ),
    dateRange: '2017 (coursework)/2020 (final defense)',
  },
  {
    institutionName: 'General Assembly',
    Icon: (
      <img
        alt=''
        src={gaLogoCrop}
        width='100%'
        style={{
          transform: 'translateY(0.2rem)',
        }}
      />
    ),
    iconBackgroundColor: '#fff',
    backgroundColor: 'rgba(255,41,65, 0.15)',
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
    description2:
      'This web-dev centric bootcamp taught me the fundamentals of programming beyond the syntax, and got me exposed to many areas in the CS space. From the moment at GA I was hooked on this never-ending and ever-evolving field.',
    dateRange: 'March 2020 -> June 2020',
  },
  {
    institutionName: 'Freelancing, Projects, Study',
    Icon: <GiBookmarklet className='bookmarkletSvgIcon' fill='#fff' />,
    iconBackgroundColor: '#fd23de',
    backgroundColor: '',
    textColor: '',
    Image: '',
    title: '',
    description1: '',
    description2: '',
    dateRange: '',
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
    backgroundColor: '',
    textColor: '',
    Image: <img alt='' src={gretrixLogo3} className='logo-padding' />,
    title: '',
    description1: '',
    description2: '',
    dateRange: '',
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
    iconBackgroundColor: '',
    backgroundColor: '',
    textColor: '',
    Image: (
      <Fragment>
        <img alt='' src={lookFarLogo} className='responsiveImgLg' />
        <img alt='' src={lookFarLogoCrop} className='responsiveImgSm' />
      </Fragment>
    ),
    title: '',
    description1: '',
    description2: '',
    dateRange: '',
  },
  {
    institutionName: 'Ruckus Marketing (NYC)',
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
    backgroundColor: '',
    textColor: '',
    Image: <img alt='' src={ruckusLogoSvg} className='logo-padding' />,
    title: '',
    description1: '',
    description2: '',
    dateRange: '',
  },
]

/**
 
   <VerticalTimelineElement
          dateClassName='timeline-date'
          iconStyle={{ background: '#ff8300', color: '#fff' }}
          date='October 2021 - Present'
          contentStyle={{
            background: '#0081ff',
            color: '#fff',
            boxShadow:
              '0px 25px 10px -6px rgb(0 0 0 / 0.25),0 -15px 10px -6px rgb(0 0 0 / 0.25),0 1px 10px -6px rgb(0 0 0 / 0.25), 0 1px 10px 6px rgb(0 0 0 / 0.25)',
            borderRadius: '1rem',
          }}
          contentArrowStyle={{
            borderRight: '7px solid #0081ff',
          }}
          icon={
            <svg viewBox='0 0 68 63.783'>
              <g data-name='Group 4921'>
                <path
                  data-name='Path 40349'
                  d='M68 63.783H0V0h68zm-6.8-26.492l-7.395-7.4 7.4-9.94-9.722-13.138H6.798v50.129l12.891-7.4v-14.27h24.669l3.95 3.877v10.4H61.2zM44.5 25.536H19.689v-9.2h24.864l3.39 4.492z'
                  fill='#fff'></path>
              </g>
            </svg>
          }>
          <div className='experience-item'>
            <div className='experience-description'>
              <h2>Ruckus Marketing, NYC</h2>
               <h1>Front-End Software Engineer</h1>
              <p>Some arbitrary description here...</p>
            </div>
            <img alt='' src={ruckusLogoSvg} className='ruckus-logo' />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          dateClassName='timeline-date'
          date='April 2021 - Oct 2021'
          iconStyle={{ background: '#fff', color: '#fff' }}
          contentStyle={{
            background: '#3b4454',
            color: '#fff',
            boxShadow:
              '0px 25px 10px -6px rgb(0 0 0 / 0.25),0 -15px 10px -6px rgb(0 0 0 / 0.25),0 1px 10px -6px rgb(0 0 0 / 0.25), 0 1px 10px 6px rgb(0 0 0 / 0.25)',
            borderRadius: '1rem',
          }}
          contentArrowStyle={{
            borderRight: '7px solid #3b4454',
          }}
          icon={
            <img
              style={{
                borderRadius: '50%',
                transform: 'translateY(-0.25rem)',
              }}
              alt=''
              src={lookFarLogoSm}
              width='100%'
            />
          }>
          <div className='experience-item'>
            <Fragment>
              <img alt='' src={lookFarLogo} className='lookFarImg' />
              <img alt='' src={lookFarLogoCrop} className='lookFarImgCrop' />
            </Fragment>
            <div className='experience-description'>
              <div className='experience-description'>
                <h2>Look Far Labs</h2>
                <h1>React / TypeScript Developer</h1>
                <p>Some arbitrary description here...</p>
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          dateClassName='timeline-date'
          date='Feb 2021 - Oct 2021'
          iconStyle={{ background: '#fff', color: '#fff' }}
          contentStyle={{
            background: '#0b2762',
            color: '#fff',
            boxShadow:
              '0px 25px 10px -6px rgb(0 0 0 / 0.25),0 -15px 10px -6px rgb(0 0 0 / 0.25),0 1px 10px -6px rgb(0 0 0 / 0.25), 0 1px 10px 6px rgb(0 0 0 / 0.25)',
            borderRadius: '1rem',
          }}
          contentArrowStyle={{
            borderRight: '7px solid #0b2762',
          }}
          icon={
            <img
              style={{
                borderRadius: '50%',
                transform: 'translateY(-0.1rem)',
              }}
              alt=''
              src={gretrixLogo2}
              width='100%'
            />
          }>
          <div className='experience-item'>
            <div className='experience-description'>
              <div className='experience-description'>
                <h2>Gretrix</h2>
                <h1>Front-End Web Developer</h1>
                <p>Some arbitrary description here...</p>
              </div>
            </div>
            <img alt='' src={gretrixLogo3} className='gx-logo' />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={''}>
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={''}
        />



 */