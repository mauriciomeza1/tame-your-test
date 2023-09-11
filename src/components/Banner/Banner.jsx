import { useRef } from "react";
import { bannerBackground, bannerBackground2x } from "../../assets/images";
import { useRevealOnScroll, useLazyLoadImage } from "../../hooks";
import "./banner.css";

export function Banner() {
  const bannerRef = useRef(null);

  useRevealOnScroll(
    bannerRef,
    { root: null, threshold: 0.1 },
    (entry, observer) => {
      entry.target.classList.remove("banner--hidden");
      observer.unobserve(entry.target);
    }
  );

  const highQualityImages = {
    "Banner Background": bannerBackground2x,
  };

  useLazyLoadImage(bannerRef, highQualityImages);

  return (
    <div ref={bannerRef} className="banner-container banner--hidden">
      <img
        alt="Banner Background"
        src={bannerBackground}
        className="lazy-img blur simulated-bg"
      />

      <div className="text">
        We help you get all of the necessary foundations for getting into the
        program of your dreams.
      </div>
    </div>
  );
}
