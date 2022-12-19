import React from 'react'
import {
  TsLogo,
  TailwindLogo,
  GatsbyLogo,
  Ellipses,
} from '../../components/atoms/svg'

export const skillsData = [
  {
    Logo: <TsLogo width='100%' />,
    heading: 'TypeScript',
    bodyList: [
      'Object-Oriented JavaScript!',
      'Typesafe, API-Driven, React Application Development',
      'Unit Testing with Jest & Enzyme',
      `ES6 / ES${new Date().getFullYear()}+`,
    ],
  },
  {
    Logo: <TailwindLogo width='100%' />,
    heading: 'Styling & Animation',
    bodyList: [
      'Advanced CSS Processing',
      'CSS-Modules | TailwindCSS | SCSS | CSS-in-JS',
      'Animations with Emotion, Framer-Motion, and GSAP',
      'Implementation of Modern Design Trends and Morphisms',
    ],
  },
  {
    Logo: <GatsbyLogo width='100%' />,
    heading: 'Headless CMS',
    bodyList: [
      'Wordpress-Templating with GatsbyJS & GraphQL',
      'Source Data from Multiple APIs',
      'No-Code Content-Management via Custom Post Types and Advanced Custom Fields',
    ],
  },

  {
    Logo: <Ellipses width='100%' className='skills-ellipses-icon' />,
    heading: 'Other...',
    bodyList: [
      'CMS Development with Wordpress, Shopify, Wix, Squarespace, Etc.',
      'SVG Optimization and UI Integration',
      'Deployment with Amazon Web Services',
    ],
  },
]
