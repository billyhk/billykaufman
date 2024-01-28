import '../../styles/pages/about.css'

import React, { Fragment } from 'react'
import { aboutPageSections, bioData } from '../../utils/data'

import Loader from '../molecules/Loader'
import { NavToTop } from '../atoms'
import cn from 'classnames'
import headshot from '../../component-images/picture-of-self.png'
import { useAssetLoader } from '../../utils/hooks/useAssetLoader'
import { useInView } from 'react-intersection-observer'

const inViewOptions = {
  threshold: 0,
  initialInView: false,
  triggerOnce: true,
}

const SecondarySection = ({ Icon, heading, subheading, body }) => {
  const { ref, inView } = useInView(inViewOptions)

  return (
    <div className='about-section'>
      <div className='about-header about__secondary-header'>
        {Icon && Icon}
        <h1>{heading}</h1>
        <h4>{subheading}</h4>
      </div>
      <div
        ref={ref}
        className={cn(inView ? 'animate-fade-in-rise' : 'opacity-0')}>
        {body}
      </div>
    </div>
  )
}

const staticCopy = {
  pageHeader: 'About Me',
  subheader: 'Allow me to introduce myself...',
}

const About = ({ referenceEl }) => {
  const showLoader = useAssetLoader([headshot])

  if (showLoader) {
    return <Loader />
  }

  return (
    <Fragment>
      <NavToTop referenceEl={referenceEl} />
      <main className='about-main'>
        <section className='about-section'>
          <div className='about-header'>
            <h1>{staticCopy.pageHeader}</h1>
            <h4>{staticCopy.subheader}</h4>
          </div>
          <div className='about__bio-content-container animate-fade-in-rise'>
            <div className='about__bio-content-text'>
              <div className='about__bio-content-text--header'>
                <p className='about__bio-content-text--header-name'>
                  {bioData.name}
                </p>
                <p className='about__bio-content-text--header-title'>
                  {bioData.title}
                </p>
              </div>
              {bioData.bodyParagraphs.map((el, i) => (
                <Fragment key={i}>{el}</Fragment>
              ))}
              <div className='about__bio-content--buttons-container'>
                {bioData.CTAs.map((el, i) => (
                  <Fragment key={i}>{el}</Fragment>
                ))}
              </div>
            </div>
            <img
              alt='headshot of self'
              src={headshot}
              className='about__bio-content-headshot'
            />
          </div>
        </section>

        {aboutPageSections.map((section, i) => (
          <SecondarySection key={i} {...section} />
        ))}
      </main>
    </Fragment>
  )
}

export default About
