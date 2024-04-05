"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

const GAP_TO_SHOW_BUTTON = 10;

export const useShowsButtons = (containerRef: RefObject<HTMLDivElement>) => {
  const [showsButtons, setShowsButtons] = useState<
    Record<"left" | "right", boolean>
  >({
    left: false,
    right: true,
  });

  useLayoutEffect(() => {
    if (!containerRef || !containerRef.current) {
      return;
    }
    const currentRef = containerRef.current;
    const onScroll = () => {
      const isLeftShowing = currentRef.scrollLeft > GAP_TO_SHOW_BUTTON;
      const isRightShowing =
        currentRef.scrollLeft + currentRef.clientWidth <
        currentRef.scrollWidth - GAP_TO_SHOW_BUTTON;
      setShowsButtons({
        left: isLeftShowing,
        right: isRightShowing,
      });
    };

    currentRef.addEventListener("scroll", onScroll);
    // eslint-disable-next-line consistent-return
    return () => {
      currentRef.removeEventListener("scroll", onScroll);
    };
  }, [containerRef]);

  return showsButtons;
};
