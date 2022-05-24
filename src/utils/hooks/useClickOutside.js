import { useEffect, useRef } from 'react'

export const useClickOutside = (callback) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      const handleClick = (e) => !ref.current?.contains(e.target) && callback()

      document.addEventListener('click', handleClick)

      return () => document.removeEventListener('click', handleClick)
    }
  }, [callback])

  return ref
}
