import React from 'react'
import {
  JsLogo,
  TailwindLogo,
  GatsbyLogo,
  Ellipses,
} from '../../components/atoms/svg'

export const skillsData = [
  {
    Logo: <JsLogo width='100%' />,
    heading: 'JavaScript / TypeScript',
    bodyList: [
      'ReactJS / NextJS',
      'Redux / Context',
      'ES6 / ES2020+',
      'Libraries: Formik/Yup, MaterialUI, React Table',
    ],
  },
  {
    Logo: <GatsbyLogo width='100%' />,
    heading: 'Headless CMS',
    bodyList: [
      'GatsbyJS',
      'Wordpress',
      'Custom Post Types and Advanced Custom Fields (ACFs)',
      'Templating and Dynamic Routing',
    ],
  },
  {
    Logo: <TailwindLogo width='100%' />,
    heading: 'Styling & Animation',
    bodyList: [
      'SVG animations',
      'CSS / SCSS',
      'PostCSS / TailwindCSS',
      'Implementation of modern design trends',
    ],
  },
  {
    Logo: <Ellipses width='100%' className='skills-ellipses-icon' />,
    heading: 'Other...',
    bodyList: ['HTML / JSX', 'Shopify Liquid', 'GraphQL', 'Deployment via AWS'],
  },
]
