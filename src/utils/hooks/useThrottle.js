import { useRef, useEffect, useCallback } from 'react'

export const useThrottle = (func, timeout) => {
  const timer = useRef(null)

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)

      timer.current = null
    }
  }, [timer])

  useEffect(() => cancel(), [cancel])

  return (...args) => {
    cancel()

    timer.current = setTimeout(() => {
      timer.current = null

      if (func && typeof func === 'function') {
        func.apply(this, args)
      }
    }, timeout)
  }
}
