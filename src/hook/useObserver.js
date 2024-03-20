import React, { useCallback, useEffect, useRef } from 'react';

export default function useObserver(hasNextPage, fetchNextPage, isLoading) {
  const observerRef = useRef();

  const handleIntersection = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) return
    const options = { threshold: 0 };
    const observer = new IntersectionObserver(handleIntersection, options);
    if (element) {
      observer.observe(element);
      return () => observer.disconnect();
    }
  }, [fetchNextPage, handleIntersection, isLoading]);

  return observerRef;
}
