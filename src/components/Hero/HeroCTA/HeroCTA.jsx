import { BrandLogos } from "../BrandLogos/BrandLogos";
import "./HeroCTA.css";

export function HeroCTA() {
  return (
    <div className="cta-container">
      <div className="primary-text">
        It’s time for you to finally
        <div className="primary-bold">Tame Your Test!</div>
      </div>
      <div className="secondary-text">
        Get started with your test preparation with unique personalized courses
        and experts that will work with you hand in hand.
      </div>
      <BrandLogos />
    </div>
  );
}
