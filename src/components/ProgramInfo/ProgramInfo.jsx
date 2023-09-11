import { useRef } from "react";
import { programInfoImg, programInfoImg2x } from "../../assets/images";
import "./ProgramInfo.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { useLazyLoadImage } from "../../hooks/useLazyLoadImage";

export function ProgramInfo() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const highQualityImages = {
    "Girl with Laptop": programInfoImg2x,
  };
  useLazyLoadImage(imageContainerRef, highQualityImages);

  const listItemsRef = Array(4)
    .fill(0)
    .map(() => useRef(null));

  function revealSection(entry, observer) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      entry.target.classList.add("section--visible");
      observer.unobserve(entry.target);
    }
  }

  function revealListItem(entry, observer) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("list-item-hidden");
      entry.target.classList.add("list-item-visible");
      observer.unobserve(entry.target);
    }
  }

  useRevealOnScroll(
    [sectionRef],
    { root: null, threshold: 0.15 },
    revealSection
  );

  useRevealOnScroll(
    listItemsRef,
    { root: null, threshold: 0.15 },
    revealListItem,
    100
  );

  return (
    <div ref={sectionRef} className="program-info-container section--hidden">
      <div className="separator"></div>
      <div ref={imageContainerRef} className="image-container">
        <img
          src={programInfoImg}
          alt="Girl with Laptop"
          className="lazy-img blur"
        />
      </div>
      <div className="text-container">
        <h2>Is this the best program for me?</h2>
        <p>
          Getting into a top school or landing the job of your dreams requires
          excellent preparation and top scores.
        </p>
        <h3>Reach your goals with courses that let you:</h3>
        <ul>
          <li ref={listItemsRef[0]} className="list-item-hidden">
            Study whenever you want
          </li>
          <li ref={listItemsRef[1]} className="list-item-hidden">
            Study wherever you like
          </li>
          <li ref={listItemsRef[2]} className="list-item-hidden">
            Plan your perfect study schedule
          </li>
          <li ref={listItemsRef[3]} className="list-item-hidden">
            Get personal coaching
          </li>
        </ul>
      </div>
    </div>
  );
}
