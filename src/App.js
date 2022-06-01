import React, { Suspense, useRef } from 'react'
import { Route } from 'react-router-dom'
import { routes } from './utils/routing'
import { useScrollToTopOnNav } from './utils/hooks'
import GradientDefs from './utils/GradientDefs'
import NavBar from './components/Navigation/NavBar'
import './index.css'
import './styles/components/footer.css'

function App() {
  const ref = useRef(null)
  useScrollToTopOnNav(ref)

  return (
    <div className='site-container'>
      <GradientDefs />
      <NavBar />
      <div className='page-container' ref={ref}>
        {routes.map((r) => {
          const { Component, path } = r
          return (
            // <Suspense fallback={() => '...'}>
              <Route
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
