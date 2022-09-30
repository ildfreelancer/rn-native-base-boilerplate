import {useEffect, useRef} from 'react'

export default function useInterval(callback, delay) {
  const intervalRef = useRef<any>(null)
  const savedCallback = useRef<any>(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    if (typeof delay === 'number') {
      intervalRef.current = setInterval(tick, delay)
      return () => clearInterval(intervalRef.current)
    }
  }, [delay])

  return intervalRef
}
