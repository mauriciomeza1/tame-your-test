import { useEffect } from "react";

export function useRevealOnScroll(refs, options, onIntersect) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer);
        }
      });
    }, options);

    function observeElement(ref) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    if (Array.isArray(refs)) {
      refs.forEach(observeElement);
    } else {
      observeElement(refs);
    }

    return () => {
      function unobserveElement(ref) {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }

      if (Array.isArray(refs)) {
        refs.forEach(unobserveElement);
      } else {
        unobserveElement(refs);
      }
    };
  }, [refs, options, onIntersect]);
}
