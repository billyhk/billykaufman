import React from 'react'
import { socialIcons } from '../../utils/socialIcons'
import '../../styles/pages/home.css'

const Home = () => (
  <main className='home-main'>
    <div className='home-title'>
      <p>Hi, I'm</p>
      <h1>Billy Kaufman</h1>
      <h2>Front-End Software Engineer</h2>
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
    </div>
  </main>
)

export default Home
