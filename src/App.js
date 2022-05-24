import React, { useRef } from 'react'
import { Route } from 'react-router-dom'
import { routes } from './utils/routing'
import { useScrollToTopOnNav } from './utils/hooks'
import NavBar from './components/Navigation/NavBar'
import './index.css'
import './styles/components/footer.css'

function App() {
  const ref = useRef(null)
  useScrollToTopOnNav(ref)

  return (
    <div className='site-container'>
      <NavBar />
      <div className='page-container' ref={ref}>
        {routes.map((r) => {
          const { Component } = r
          return (
            <Route
              exact
              path={r.path}
              referenceEl={ref}
              component={() => <Component referenceEl={ref} />}
            />
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
