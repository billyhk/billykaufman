import React, { useRef } from 'react'
import { Route } from 'react-router-dom'

import NavBar from './components/Navigation/NavBar'

//route components
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

import './index.css'
import { useScrollToTopOnNav } from './utils/hooks/scrollToTopOnNav'

function App() {
  const ref = useRef(null)
  useScrollToTopOnNav(ref)

  return (
    <div className='site-container'>
      <NavBar />
      <div className='page-container' ref={ref}>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route
          exact
          path='/projects'
          component={() => <Projects referenceEl={ref} />}
        />
        <Route exact path='/contact' component={Contact} />
        <div className='about-footer'>
          <p>{'\u00A9 Billy Kaufman 2022'}</p>
        </div>
      </div>
    </div>
  )
}

export default App
