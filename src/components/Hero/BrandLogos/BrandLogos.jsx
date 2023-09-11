import { useRef } from "react";
import {
  GMATLogo,
  GMATLogo2x,
  TOEFLLogo,
  TOEFLLogo2x,
  GRELogo,
  GRELogo2x,
} from "../../../assets/images";
import "./BrandLogos.css";
import { useLazyLoadImage } from "../../../hooks";

export function BrandLogos() {
  const containerRef = useRef(null);
  const highQualityImages = {
    "GMAT Logo": GMATLogo2x,
    "TOEFL Logo": TOEFLLogo2x,
    "GRE Logo": GRELogo2x,
  };

  useLazyLoadImage(containerRef, highQualityImages);

  return (
    <section ref={containerRef} className="brand-container">
      <div className="top-row">
        <img src={GMATLogo} alt="GMAT Logo" className="logo lazy-img" />
        <img src={TOEFLLogo} alt="TOEFL Logo" className="logo lazy-img" />
      </div>
      <div className="bottom-row">
        <img src={GRELogo} alt="GRE Logo" className="logo lazy-img" />
      </div>
    </section>
  );
}
