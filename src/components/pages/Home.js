import '../../styles/pages/home.css'
import '../../styles/components/loader.css'

import Loader from '../molecules/Loader'
import React from 'react'
import { socialIcons } from '../../utils/socialIcons'
import { useAssetLoader } from '../../utils/hooks/useAssetLoader'

const BACKGROUND_IMAGE_URL =
  'https://d346xxcyottdqx.cloudfront.net/wp-content/uploads/2016/02/Big-data-storage-e1455012396729.jpg'

const staticCopy = {
  intro: "Hi, I'm",
  name: 'Billy Kaufman',
  title: 'Front-End Software Engineer',
}

const Home = () => {
  const showLoader = useAssetLoader([BACKGROUND_IMAGE_URL])

  if (showLoader) {
    return <Loader />
  }

  return (
    <main
      className='home-main'
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}>
      <div className='home-title animate-slide-right'>
        <p className='home-title__intro'>{staticCopy.intro}</p>
        <p className='home-title__name'>{staticCopy.name}</p>
        <p className='home-title__title'>{staticCopy.title}</p>
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
