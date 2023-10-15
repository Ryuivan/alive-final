import React from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

const gallery = [
  {
    id: 1,
    name: "pleno-1",
    title: "PLENO 1",
    url: "https://cdn.discordapp.com/attachments/1138154440512241845/1155754400892059738/PLENO_1_small.webp",
    alt: "Photo Rapat Pleno 1",
    date: "2 JUNI 2023",
    className: "gallery-card-gallery-image-pleno1"
  },
  {
    id: 2,
    name: "pleno-2",
    title: "PLENO 2",
    url: "https://cdn.discordapp.com/attachments/1138154440512241845/1155754400543940629/PLENO_2_small.webp",
    alt: "Photo Rapat Pleno 2",
    date: "27 JULI 2023",
    className: "gallery-card-gallery-image-pleno2"
  },
  {
    id: 3,
    name: "pleno-3",
    title: "PLENO 3",
    url: "https://cdn.discordapp.com/attachments/1138154440512241845/1158665523198959616/PLENO_3_40_of_43_copy.webp",
    date: "29 SEPTEMBER 2023",
    className: "gallery-card-gallery-image-pleno3"
  },
];

export default function Gallery() {
  return (
    <section className="gallery-card-section" id="gallery">
      <div className="gallery-card-title">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-width">
        <div className="gallery-card-container">
          {gallery.map((card) => (
            <Link
              to={`/${card.name}`}
              style={{ textDecoration: "none" }}
              key={card.id}
            >
                <div className="gallery-card-gallery">
                  <div className="gallery-card-gallery-image">
                    <img src={card.url} alt={card.alt} className={card.className}/>
                    
                  </div>
                  <h1>{card.title}</h1>
                  <h2>{card.date}</h2>
                </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="gallery-wave">
        <div className="wave1"></div>
      </div>
    </section>
  );
}
