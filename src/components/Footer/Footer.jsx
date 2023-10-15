import "./Footer.css";
import { FaInstagram, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="contact">
      <footer className="bg-footer relative-footer flex-footer">
        <div className="flex-footer container-footer relative-footer">
          <img
            className="star-mobile-footer star-mobile2-footer absolute-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558912758653009/starMobile.webp"
            alt="star-mobile"
          />
          <img
            className="logo-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914121801798/logoAlive.webp"
            alt="logo-footer"
          />
          <div className="relative-footer flex-footer content-footer">
            <span className="register-now-footer relative-footer">
              <img
                className="logo-mobile-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914121801798/logoAlive.webp"
                alt="logo-mobile-footer"
              />
              <img
                className="absolute-footer star-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914553811075/star.webp"
                alt="star-footer"
              />
              <div className="register-now-footer d-flex flex-column">
                <span>REGISTER</span>
                <span>NOW!</span>
              </div>
            </span>
            <div className="footer-line"></div>
            <div className="contact-footer">
              <div>Contact Us</div>
              <a
                href="https://www.instagram.com/alivemedic.umn/"
                target="_blank"
                className="instagram d-flex align-items-center"
              >
                <FaInstagram />
                &nbsp;alivemedic.umn
              </a>
              <a
                href="http://line.me/ti/p/~christineangela03"
                target="_blank"
                className="instagram d-flex align-items-center"
              >
                <FaLine />
                &nbsp;christineangela03
              </a>
            </div>
          </div>
        </div>
        <div className="sponsor-section"></div>
        <img
          className="wave-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558913211633694/wave.webp"
          alt="wave-footer"
        />
        <img
          className="wave-mobile-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558913756905533/waveMobile.webp"
          alt="wave-mobile-footer"
        />
      </footer>
    </div>
  );
}