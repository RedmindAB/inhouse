import { useEffect } from 'react'

const usePageReload = (minutes = 30) => {
  useEffect(() => {
    const interval = setInterval(() => window.location.reload(), 1000 * 60 * minutes)
    return () => clearInterval(interval)
  }, [])
}

export default usePageReload
