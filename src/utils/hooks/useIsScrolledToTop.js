import { useEffect, useState } from 'react'

/**
 * Custom hook to check if an element is scrolled to the top.
 * @param {React.RefObject<HTMLElement>} referenceEl - The element to track.
 * @returns {boolean} - `true` if scrolled to the top, otherwise `false`.
 */
export const useIsScrolledToTop = (referenceEl) => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(false)

  useEffect(() => {
    const ref = referenceEl.current
    const handleScroll = () => {
      if (ref) {
        setIsScrolledToTop(ref.scrollTop === 0)
      }
    }

    if (ref) {
      ref.addEventListener('scroll', handleScroll)
      // Initial check
      handleScroll()
    }

    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll)
      }
    }
  }, [referenceEl])

  return isScrolledToTop
}
