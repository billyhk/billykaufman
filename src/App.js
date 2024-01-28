import './index.css'
import './styles/components/footer.css'

import React, { useRef } from 'react'

import GradientDefs from './utils/GradientDefs'
import NavBar from './components/Navigation/NavBar'
// import { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { routes } from './utils/routing'
import { useScrollToTopOnNav } from './utils/hooks'

function App() {
  const ref = useRef(null)
  useScrollToTopOnNav(ref)

  return (
    <div className='site-container'>
      <GradientDefs />
      <NavBar pageContainerRef={ref} />
      <div className='page-container' ref={ref}>
        {routes.map((r, i) => {
          const { Component, path } = r
          return (
            // <Suspense fallback={() => '...'}>
            <Route
              key={i}
              exact
              path={path}
              component={() => <Component referenceEl={ref} />}
            />
            // </Suspense>
          )
        })}
        <div className='about-footer'>
          <span>{`\u00A9 Billy Kaufman ${new Date().getFullYear()}`}</span>
        </div>
      </div>
    </div>
  )
}

export default App
