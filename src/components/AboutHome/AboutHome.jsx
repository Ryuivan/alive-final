import "./AboutHome.css";
import { Link } from "react-router-dom";

export default function AboutHome() {
  return (
    <div className="about-home d-flex align-items-center">
      <div className="about-left d-flex justify-content-center align-items-center">
        <div className="inner-left"></div>
      </div>
      <div className="about-middle d-flex flex-column justify-content-center align-items-center">
        <h1 className="about-home-title">ABOUT ALIVE 9.0</h1>
        <p className="about-home-desc">
          Alive merupakan acara tahunan yang diselenggarakan oleh UMN Medical
          Center. Tiap tahunnya, Alive mengangkat tema kesehatan. Pada tahun
          ini, Alive 9.0 mengangkat tema besar Nutrient Food. Kalau dirincikan,
          sub-tema Alive 9.0 adalah Food and Body (FnB). Tema ini diangkat guna
          meningkatkan pengetahuan publik terhadap betapa pentingnya peran
          nutrisi makanan kepada tubuh.
        </p>
        <Link to="/about">
          <button className="about-home-btn">MEET OUR MASCOT!</button>
        </Link>
      </div>
      <div className="about-right d-flex justify-content-center align-items-center">
        <div className="inner-right"></div>
      </div>
    </div>
  );
}
