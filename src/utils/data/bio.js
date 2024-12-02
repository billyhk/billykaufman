import { REMOTE_ASSETS } from './remoteAssets'
import React from 'react'

export const bioData = {
  name: 'Billy Kaufman',
  title: 'Full-stack web engineer in NYC',
  bodyParagraphs: [
    <p>
      Experienced software engineer specializing in full-stack web development.
      Skilled in TypeScript (React-based frameworks), object-oriented software
      design patterns, and integrating APIs.
    </p>,
    <p>
      Strong engineering professional with a full-stack engineering certificate
      from{' '}
      <a
        className='g-a-link'
        href='https://generalassemb.ly/education/software-engineering-immersive-remote'
        target='_blank'
        rel='noopener noreferrer'>
        General Assembly
      </a>
      .
    </p>,
    <p>
      My favorite web stack: TypeScript, React, Python, Django, PostgreSQL, and AWS for cloud.
    </p>,
  ],
  CTAs: [
    <a
      className='fancy-link fancy-bg-blue'
      href={REMOTE_ASSETS.resume}
      target='_blank'
      rel='noopener noreferrer'>
      Download Resume
    </a>,
    <a
      className='fancy-link fancy-bg-red'
      href='mailto:billyhkaufman@gmail.com'>
      Hire Me
    </a>,
  ],
}
