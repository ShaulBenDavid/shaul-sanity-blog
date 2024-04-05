"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

export const useIsScroll = (containerRef: RefObject<HTMLDivElement>) => {
  const [hasScroll, setHasScroll] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!containerRef || !containerRef.current) {
      return;
    }
    const currentRef = containerRef.current;

    const observer = new ResizeObserver(() => {
      const isInScroll = currentRef.clientWidth < currentRef.scrollWidth;
      setHasScroll(isInScroll);
    });
    observer.observe(currentRef);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return hasScroll;
};
