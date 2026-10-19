import '@testing-library/jest-dom/vitest'

if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

if (!window.IntersectionObserver) {
  class IntersectionObserverStub implements IntersectionObserver {
    readonly root = null
    readonly rootMargin = ''
    readonly thresholds: ReadonlyArray<number> = []
    readonly scrollMargin = ''

    disconnect() {}
    observe(target: Element) {
      this.callback([{ isIntersecting: true, target } as IntersectionObserverEntry], this)
    }
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
    unobserve() {}

    constructor(
      private callback: IntersectionObserverCallback,
      _options?: IntersectionObserverInit,
    ) {}
  }

  window.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver
}
