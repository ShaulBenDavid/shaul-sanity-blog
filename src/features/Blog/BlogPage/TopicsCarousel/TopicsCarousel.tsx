"use client";

import React, { useCallback, useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import type { GetTopics } from "@/src/sanity/queries/home";
import { Chip } from "@/src/components/Chip";
import theme from "@/src/styles/tailwind.theme";
import { buildRoutePath } from "@/src/utils";
import { useIsScroll } from "@/src/hooks";
import { Routes } from "@/src/routes";
import { useShowsButtons } from "./useShowsButtons";
import S from "./TopicsCarousel.module.css";

interface TopicsCarouselProps {
  data: GetTopics;
}

export const TopicsCarousel = ({ data }: TopicsCarouselProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScroll = useIsScroll(scrollRef);
  const showsButtons = useShowsButtons(scrollRef);

  const handleScroll = useCallback((scrollIn: number) => {
    if (scrollRef?.current) {
      scrollRef.current.scrollBy({ left: scrollIn, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="no-scrollbar flex snap-x snap-mandatory flex-row gap-2 overflow-x-auto"
        ref={scrollRef}
      >
        {data.map(({ slug, title }) => (
          <div className="snap-start" key={slug.current}>
            <Chip
              name={title}
              href={buildRoutePath(Routes.TOPIC, slug.current)}
            />
          </div>
        ))}
      </div>
      {isScroll && (
        <>
          {showsButtons.left && (
            <div className={S.leftBackground}>
              <button
                aria-label="previous sections"
                tabIndex={0}
                onClick={() => handleScroll(-110)}
              >
                <SlArrowLeft stroke={theme.secondary[950]} />
              </button>
            </div>
          )}
          {showsButtons.right && (
            <div className={S.rightBackground}>
              <button
                aria-label="next sections"
                tabIndex={0}
                onClick={() => handleScroll(110)}
              >
                <SlArrowRight stroke={theme.secondary[950]} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
