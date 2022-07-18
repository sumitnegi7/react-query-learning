import { useEffect, useRef, useState } from 'react';

/**
 * React Intersection Observer custom hook | Ref: https://dev.to/producthackers/intersection-observer-using-react-49ko
 * Naming inspired by https://www.npmjs.com/package/react-intersection-observer
 * @param options optional
 * {
 *   root?: Element | Document | null;
 *   rootMargin?: string;
 *   threshold?: number | number[];
 * }
 * @returns
 */
export const useIsVisible = (
  options
)=> {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callbackFunction = ([entry], callbackObserver) => {
      if (entry.isIntersecting === true) {
        setIsVisible(true);
        callbackObserver.disconnect();
      }
      else{
        setIsVisible(false)
      }
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current !== null) {
      observer.observe(containerRef.current);
    }

    // Cleanup for IntersectionObserver
    return () => {
      observer.disconnect();
    };
  }, [containerRef, isVisible, options]);

  return [containerRef, isVisible];
};
