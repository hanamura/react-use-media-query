import { useEffect, useState } from 'react'

/**
 * React hook to check if a media query is active. `defaultValue` is returned before the first render on the client.
 */
export function useMediaQuery<T extends unknown>(
  query: string,
  defaultValue: T
): boolean | T {
  const [matches, setMatches] = useState<boolean | T>(defaultValue)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const matchMedia = window.matchMedia(query)
    const update = () => setMatches(matchMedia.matches)

    matchMedia.addEventListener('change', update)
    update()

    return () => matchMedia.removeEventListener('change', update)
  }, [query])

  return matches
}
