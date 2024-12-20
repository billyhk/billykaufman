import '../../styles/pages/home.css'
import '../../styles/components/loader.css'

import Loader from '../molecules/Loader'
import React from 'react'
import backgroundImage from '../../component-images/home-background.webp'
import { socialIcons } from '../../utils/socialIcons'
import { useAssetLoader } from '../../utils/hooks/useAssetLoader'

const staticCopy = {
  intro: "Hi, I'm",
  name: 'Billy Kaufman',
  title: 'Software Engineer',
}

const Home = () => {
  const showLoader = useAssetLoader([backgroundImage])

  if (showLoader) {
    return <Loader />
  }

  return (
    <main
      className='home-main'
      style={{
        backgroundImage: `linear-gradient(rgba(49, 124, 185, 0.5), rgba(49, 124, 185, 0.5)), url(${backgroundImage})`,
      }}>
      <div className='home-title animate-slide-right'>
        <h1 className='home-title__intro'>{staticCopy.intro}</h1>
        <h1 className='home-title__name' data-text={staticCopy.name}>
          {staticCopy.name}
        </h1>
        <h1 className='home-title__title'>{staticCopy.title}</h1>
        <div className='home__social--container'>
          {socialIcons.map((el, i) => (
            <a
              key={i}
              className='home__social--icon'
              href={el.href}
              target='_blank'
              rel='noopener noreferrer'>
              <el.icon size={50} />
            </a>
          ))}
        </div>
        <div className='home__social--container-mobile'>
          {socialIcons.map((el, i) => (
            <a
              key={i}
              className='home__social--icon-mobile'
              href={el.href}
              target='_blank'
              rel='noopener noreferrer'>
              <el.icon size={25} />
              {el.displayName}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
