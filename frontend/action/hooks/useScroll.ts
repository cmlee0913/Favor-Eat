import { useScrollState } from "@/types/Hooks/dummy";
import { useState, useEffect, useCallback } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState<useScrollState>({
    lastScrollTop: 0,
    bodyOffset: undefined,
    scrollY: 0,
    direction: ''
  })

  //화면 전체 길이
  let viewHeight = null

  if (typeof document !== "undefined") {
     viewHeight= document.documentElement.clientHeight
  }

  const handleScrollEvent = useCallback((e)=>{
    setScroll((prevState) => {
        const prevLastScrollTop = prevState.lastScrollTop
        const bodyOffset = document.body.getBoundingClientRect()

        return {
            lastScrollTop: -bodyOffset.top,
            bodyOffset: bodyOffset,
            scrollY: -bodyOffset.top,
            direction: prevLastScrollTop > -bodyOffset.top ? 'down':'top'

        }
    })
  }, [])

  useEffect(()=>{
    const scrollListener = (e) => {
        handleScrollEvent(e)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
        window.removeEventListener('scroll', scrollListener)
    }
  }, [handleScrollEvent])

  return [scroll.scrollY, viewHeight]
}
