import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the user to the top of the screen on navigation.
 */
export const useScrollToTopOnNav = (ref) => {
  const { pathname } = useLocation()

  useEffect(() => {
    return ref.current?.scrollTo({ top: 0 })
  }, [pathname, ref])

  return
}
