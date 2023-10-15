import React, { useState } from "react";
import Modal from "./Modal";

const gallery1 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813410891812904/1.webp?ex=653d4d61&is=652ad861&hm=69b85c64f55cb852d1f54d350d5b66b434ac25881b4d34a6707a69c98e9c5522&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813475064647822/15.webp?ex=653d4d70&is=652ad870&hm=6d4fa82c23ff7dc91f7a51115889ab434afc95fe5bcbdcfa325898571f14c26d&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813414557622373/5.webp?ex=653d4d62&is=652ad862&hm=3a651e6648c022e68abd6fd59fdccdb9b03153523c4f4f2dc88a2be8901bdff2&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813415287427174/6.webp?ex=653d4d62&is=652ad862&hm=67032e0cee1fbd4b6bee424db10a2966a6a795c88b09de1012675a15b5bd350f&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813416013058159/7.webp?ex=653d4d62&is=652ad862&hm=2094597b9bb6d6e9a0b1715d68302ecb763379c114031900d0be76626cbf91e2&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813473579872397/13.webp?ex=653d4d70&is=652ad870&hm=500444ed238b8b2fd66a08c6dd5f193d4a1e0beed492f1ec9cdf18b6527733f9&",
  },
];

const gallery2 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813474481635349/14.webp?ex=653d4d70&is=652ad870&hm=1de7ebc3ac62184c0429a0134ee2b5e8dc28c8c155442ef4d3608c948e73a7f7&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813412867313765/3.webp?ex=653d4d61&is=652ad861&hm=daad40a7fa996d55fee409154827f6d4651f9f6bdae78605fb9597510ab47e4e&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813412007477278/2.webp?ex=653d4d61&is=652ad861&hm=c263fb1cf10da6e48852c815fa03364f7293e0cf9d932f25e38cd28dd5832c48&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813416969347092/8.webp?ex=653d4d62&is=652ad862&hm=860b5be59030afe50d4b201492668d72d014334faf21ab76699515db3e241e4c&",
  },
];

const gallery3 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813475999985694/16.webp?ex=653d4d70&is=652ad870&hm=cfbabcf1551f5f487fd178fb0c443ad9106701ff0249f22d5d68da9d5355f68d&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813413668442212/4.webp?ex=653d4d61&is=652ad861&hm=157395d5a70b3b12b88ab1a819afe2b86a0c6abab74720b1ba29aa00c8f59b8b&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813418080833656/9.webp?ex=653d4d62&is=652ad862&hm=79918022a0b264d7816d27dc31d14d5b4ffd9f540e7a55729e453bca1869d90d&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056593591926854/20230727-DSCF2231.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813472703254579/12.webp?ex=653d4d6f&is=652ad86f&hm=90ca6874e6f27ba090afbbcda67bb4c2f4ee8b204f424410c5fd5ac122ba7bd6&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1162813471730184223/11.webp?ex=653d4d6f&is=652ad86f&hm=1f2f7c6471f2b9b46b02bd08b28713e2d9692b5bcc809e3a55d1d83309e57222&",
  },
];

const Pleno2 = () => {
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
          <h1>Pleno 2</h1>
          <h3>27 JULI 2023</h3>
        </div>
        <div className="gallery-row">
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

export default Pleno2;