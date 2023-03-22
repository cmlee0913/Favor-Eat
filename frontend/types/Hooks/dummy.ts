export interface useScrollState {
    lastScrollTop: number,
    bodyOffset: DOMRect | undefined,
    scrollY: number,
    direction: string,
    eventHeight: number
}