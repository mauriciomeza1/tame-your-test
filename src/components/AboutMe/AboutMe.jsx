import { useRef } from "react";
import { useRevealOnScroll, useLazyLoadImage } from "../../hooks";
import {
  harvard,
  harvard2x,
  stanford,
  stanford2x,
  aboutMeImg,
  aboutMeImg2x,
} from "../../assets/images";
import "./AboutMe.css";

export function AboutMe() {
  const sectionRef = useRef(null);
  const imgContainerRef = useRef(null);
  const aboutMeImgContainerRef = useRef(null);

  function revealSection(entry, observer) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      entry.target.classList.add("section--visible");
      observer.unobserve(entry.target);
    }
  }

  function revealAboutMeImg(entry, observer) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("blur");
      observer.unobserve(entry.target);
    }
  }

  const highQualityImages = {
    Harvard: harvard2x,
    Stanford: stanford2x,
    "About Me": aboutMeImg2x,
  };

  useRevealOnScroll(
    [sectionRef],
    { root: null, threshold: 0.15 },
    revealSection
  );

  useRevealOnScroll(
    [aboutMeImgContainerRef],
    { root: null, threshold: 0.15 },
    revealAboutMeImg
  );

  useLazyLoadImage(imgContainerRef, highQualityImages);
  useLazyLoadImage(aboutMeImgContainerRef, highQualityImages);

  return (
    <div ref={sectionRef} className="about-me-container section--hidden">
      <div className="about-me-info">
        <h2>Hi, I'm Guillermo</h2>
        <p>
          I started Tame Your Test in an attempt to provide a{" "}
          <span>better alternative to studying</span> after suffering the
          horrible reality that is the GMAT.
        </p>
        <p>
          I was a victim of all the “magical solution courses” and{" "}
          <span>I did everything you’re not supposed to do.</span> Fortunately,
          I eventually developed a love-hate relationship with the process and
          reached great results!
        </p>
        <h4>Here’s a little bit more about me:</h4>
        <ul>
          <li>Harvard MBA Class of 2024</li>
          <li>Accepted into HBS and Stanford GSB</li>
          <li>GMAT 720 (50 Quant)</li>
        </ul>
        <div ref={imgContainerRef} className="institutions-imgs">
          <img src={harvard} alt="Harvard" className="lazy-img blur" />
          <img src={stanford} alt="Stanford" className="lazy-img blur" />
        </div>
      </div>{" "}
      <div ref={aboutMeImgContainerRef} className="about-me-main-img-container">
        <img
          className="about-me-main-img lazy-img blur"
          src={aboutMeImg}
          alt="About Me"
          data-src-key="about-me-main"
        />
      </div>
    </div>
  );
}
