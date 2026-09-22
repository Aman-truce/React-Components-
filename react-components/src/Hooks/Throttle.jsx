import { useRef, useCallback, useEffect } from "react";

function useThrottle(fn, delay) {
  const lastRan = useRef(0);
  const fnRef = useRef(fn);
  fnRef.current = fn; // always keep latest fn, avoids stale closures

  const throttledFn = useCallback((...args) => {
    const now = Date.now();
    if (now - lastRan.current >= delay) {
      lastRan.current = now;
      fnRef.current(...args);
    }
  }, [delay]);

  return throttledFn;
}

// usage
export function ScrollTracker() {
  const handleScroll = useThrottle((e) => {
    console.log("scroll position:", window.scrollY);
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return <div>Scroll me</div>;
}