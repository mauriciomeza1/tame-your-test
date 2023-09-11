import { useRef } from "react";
import { HeroCTA } from "./HeroCTA/HeroCTA";
import { HeroForm } from "./HeroForm/HeroForm";
import { useLazyLoadImage, useLazyBackground } from "../../hooks";
import { logo, logo2x, background, background2x } from "../../assets/images";
import "./hero.css";

export function Hero() {
  const heroContainerRef = useRef(null);
  const logoContainerRef = useRef(null);

  const highQualityLogos = { "TYT logo": logo2x };

  useLazyLoadImage(logoContainerRef, highQualityLogos);
  useLazyBackground(heroContainerRef, background, background2x);

  return (
    <div ref={heroContainerRef} className="hero-container blur">
      <div ref={logoContainerRef} className="logo-container">
        <img src={logo} alt="TYT logo" className="tyt-logo lazy-img blur" />{" "}
      </div>
      <div className="hero-main">
        <HeroCTA />
        <HeroForm />
      </div>
    </div>
  );
}
