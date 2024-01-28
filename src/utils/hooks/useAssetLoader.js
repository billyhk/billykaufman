import { useEffect, useState } from 'react'

export const useAssetLoader = (assetUrls) => {
  const [loaded, setLoaded] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    Promise.all(
      assetUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = url
          img.onload = resolve
          img.onerror = reject
        })
      })
    ).then(() => {
      setLoaded(true)
    })
  }, [assetUrls])

  useEffect(() => {
    if (loaded) {
      setShowLoader(false)
    }
  }, [loaded])

  return showLoader
}
