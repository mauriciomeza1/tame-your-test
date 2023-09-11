import { useEffect } from "react";

export function useLazyLoadImage(ref, highQualityImages) {
  useEffect(() => {
    if (!ref.current) return;

    function handleImageLoad(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const lazyImg = entry.target;
        lazyImg.src = highQualityImages[lazyImg.alt];
        lazyImg.addEventListener("load", () => {
          lazyImg.classList.remove("blur", "lazy-img");
        });
        observer.unobserve(lazyImg);
      });
    }

    const imgObserver = new IntersectionObserver(handleImageLoad, {
      root: null,
      threshold: 0,
      rootMargin: "200px",
    });

    const elements = ref.current.querySelectorAll(".lazy-img");
    elements.forEach((element) => imgObserver.observe(element));

    return () => {
      elements.forEach((element) => imgObserver.unobserve(element));
    };
  }, [ref, highQualityImages]);
}
