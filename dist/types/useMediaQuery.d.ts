/**
 * React hook to check if a media query is active. `defaultValue` is returned before the first render on the client.
 */
export declare function useMediaQuery<T extends unknown>(query: string, defaultValue: T): boolean | T;
