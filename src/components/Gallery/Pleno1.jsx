import React, { useState } from "react";
import "./Masonry.css";
import Modal from "./Modal";

const gallery1 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779177813037076/1.webp?ex=653d2d7f&is=652ab87f&hm=92ac3e43a3338b4e1b7214b5a3062f2ad0f0783d6b6adc79eea9ea69e406b652&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779178823844041/2.webp?ex=653d2d7f&is=652ab87f&hm=8c0f5933540af7364e6e31679f2d2404efc683b9af36b6c8378705ed6f68c65d&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779179553665125/3.webp?ex=653d2d7f&is=652ab87f&hm=2ca3d1b85d2a75ccc5cd53a316d963361a216c210966a45841b04484c1517a7b&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779181080399962/4.webp?ex=653d2d80&is=652ab880&hm=36880406a2692ba0aeb8fbe790270e3ef4d15d3ac6d14d02eef5f3b7fef895bb&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779187870957588/9.webp?ex=653d2d81&is=652ab881&hm=0a26ee9a11cc3c6048217457b55af2376b0dcae86e0fde3f73d6eb88986c8246&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779189129269258/10.webp?ex=653d2d82&is=652ab882&hm=8709271302f19cc652aebae23288e64d7262aa26ccf0ba440ad4c035653327af&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781544176418907/17.webp?ex=653d2fb3&is=652abab3&hm=382047dd8f63e7b8860cb69fb4721478dbf5a8a3f7c4c44540d7437425f2d671&",
  },
];

const gallery2 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779183588573284/6.webp?ex=653d2d80&is=652ab880&hm=1769d7756ac34d8fcf0b0094bd1fb7a82406aa9a221c8086a233b6348941b881&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779186704961609/8.webp?ex=653d2d81&is=652ab881&hm=ad51aef257e5ac9662b56def97d6b25a55bda9357cb2babcc157793f2921cfc9&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779182401605703/5.webp?ex=653d2d80&is=652ab880&hm=849fff9ca44094860edca95bfe1df5062230838a2ddf8bec6255dfbeb63b4690&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781551310929950/15.webp?ex=653d2fb5&is=652abab5&hm=31d92e5ad698c1ff3f3de09b41075c43bfc3bab8a5e67a2b6e4980e389b33a2c&",
  },
];

const gallery3 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162779185056591872/7.webp?ex=653d2d81&is=652ab881&hm=b94843494bea258ff8384b1cb7a46d6d7be262c3e750df007ce097633ff12e57&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781545430532116/11.webp?ex=653d2fb3&is=652abab3&hm=fcaef63cc903097bc5fcb4faccc5b06b2cc0b7836844f4306b331142a35e5c1f&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781546906923108/12.webp?ex=653d2fb4&is=652abab4&hm=8efd7935edbc66fa59358dc58a2ce2c8cc9ac2c9bd718db48ad6545a015f85f0&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781552720232541/16.webp?ex=653d2fb5&is=652abab5&hm=b6bd2142d09a91421d513760eb67fda5bce85c512df441749da2877bf2f40601&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781548706283620/13.webp?ex=653d2fb4&is=652abab4&hm=97bf5e8d37b8101d1e79785fe037c00226af5a9d207a0036af95f9174f559b5a&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162781549905850428/14.webp?ex=653d2fb4&is=652abab4&hm=4abb127fec63fb8718d303517c8caef083e638a8dcaaf4664066e150c0ccec04&",
  },
];

const Gallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  
  return (
    <div className="gallery-bg-image">
      <div className="gallery-bg-wave-top">
        <div className="gallery-bg-wave2"></div>
      </div>
      <section className="gallery-container">
        <div className="gallery-heading">
          <h1>Pleno 1</h1>
          <h3>27 JULI 2023</h3>
        </div>
        <div className="gallery-row mx-auto">
          <div className="gallery-column">
            {gallery1.map((item, index) => (
              <img
                src={item.link}
                key={index}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
          <div className="gallery-column">
            {gallery2.map((item, index) => (
              <img
                src={item.link}
                key={index}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
          <div className="gallery-column">
            {gallery3.map((item, index) => (
              <img
                src={item.link}
                key={index}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
        </div>
        {clickedImg && (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        )}
      </section>
      <div className="gallery-bg-wave-bottom">
        <div className="gallery-bg-wave1"></div>
      </div>
    </div>
  );
};

export default Gallery;