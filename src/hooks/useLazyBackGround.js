import { useEffect } from "react";

export function useLazyBackground(ref, lowQualityImage, highQualityImage) {
  useEffect(() => {
    if (!ref.current) return;

    const lazyElement = ref.current;
    lazyElement.style.backgroundImage = `url(${lowQualityImage})`;

    const img = new Image();
    img.src = highQualityImage;

    img.onload = () => {
      lazyElement.style.backgroundImage = `url(${highQualityImage})`;
      lazyElement.classList.remove("blur");
    };
  }, [ref, lowQualityImage, highQualityImage]);
}
