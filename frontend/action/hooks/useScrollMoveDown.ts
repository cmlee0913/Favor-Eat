import { useCallback, useEffect, useRef } from "react";

export default function useScrollMoveDown(duration = 1, delay = 0) {
  const dom = useRef() as any;

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting && current) {
      current.style.transitionProperty = "all";
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = `${delay*0.2}s`;
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 1 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: "translate3d(0, -50%, 0)",
    },
  };
}
