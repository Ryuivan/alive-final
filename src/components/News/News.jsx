import "./News.css";
import { Row, Col } from "react-bootstrap";

export default function News() {
  return (
    <div className="news-bg">
      <img
        src="https://cdn.discordapp.com/attachments/1139426470901600336/1162958206755164192/left.webp"
        alt="left-ornament"
        className="left-news"
      />
      <img
        src="https://cdn.discordapp.com/attachments/1139426470901600336/1162958207002611752/right.webp"
        alt="right-ornament"
        className="right-news"
      />
      <Row className="news-container m-0 gx-5">
        <Col lg={6} className="d-flex align-items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1139426470901600336/1155567151999090741/newsLogoSmall.webp"
            alt="news-logo"
            className="news-logo"
          />
        </Col>
        <Col lg={6} className="d-flex align-items-center">
          <div className="news-desc">
            <p>
              Workout Bareng Yuk! Workshop Workout ini akan dipandu oleh Coach
              Nisa yang merupakan APKI Certified Fitness Trainer. Terlebih lagi
              kalian bisa mendapatkan cek body composition gratis dan +1 SKKM
              Minat dan Bakat serta ada hadiah menarik bagi yang beruntung.
              <img
                src="https://cdn.discordapp.com/attachments/1139426470901600336/1155555480853295114/newsStar.webp"
                alt="news-star"
                className="news-star"
              />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
