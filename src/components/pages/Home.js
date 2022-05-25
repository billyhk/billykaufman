import React from 'react'
import { socialIcons } from '../../utils/socialIcons'
import '../../styles/pages/home.css'

const Home = () => (
  <main className='home-main'>
    <div className='home-title'>
      <p className='home-title__intro'>Hi, I'm</p>
      <p className='home-title__name'>Billy Kaufman</p>
      <p className='home-title__title'>Front-End Software Engineer</p>
      <div className='home__social--container'>
        {socialIcons.map((el) => (
          <a
            className='home__social--icon'
            href={el.href}
            target='_blank'
            rel='noopener noreferrer'>
            <el.icon size={40} />
          </a>
        ))}
      </div>
      <div className='home__social--container-mobile'>
        {socialIcons.map((el) => (
          <a
            className='home__social--icon-mobile'
            href={el.href}
            target='_blank'
            rel='noopener noreferrer'>
            <el.icon />
            {el.displayName}
          </a>
        ))}
      </div>
    </div>
  </main>
)

export default Home
