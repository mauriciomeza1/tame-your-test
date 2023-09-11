import { useState, useEffect } from "react";
import "./BackToTopButton.css";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function toggleVisibility() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        if (lastKnownScrollPosition > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      <div
        onClick={scrollToTop}
        className={`fade-in-out ${isVisible ? "visible" : "hidden"}`}
      >
        <button className="back-to-top-btn">
          <span className="arrow-up"></span>
        </button>
      </div>
    </div>
  );
}
