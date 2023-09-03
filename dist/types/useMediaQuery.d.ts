/**
 * React hook to check if a media query is active. `defaultValue` is returned before the first render on the client.
 */
export declare function useMediaQuery<T extends unknown>(query: string, defaultValue: T): boolean | T;
/**
 * React hook to check if a media query is active. `defaultValue` is returned before the first render on the client.
 * This hook uses `useLayoutEffect` instead of `useEffect` to prevent a flash of the default value on the client.
 */
export declare function useLayoutMediaQuery<T extends unknown>(query: string, defaultValue: T): boolean | T;
