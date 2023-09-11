import { twitter, facebook, instagram } from "../../assets/images";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div>© Tame Your Test 2021</div>
      <div className="socials">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={instagram} alt="Instagram" />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
      <div className="terms-conditions">
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
}
