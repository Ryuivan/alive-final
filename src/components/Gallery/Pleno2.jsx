import React, { useState } from "react";

const gallery1 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056436829835324/20230727-DSCF2078.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056437479940178/20230727-DSCF2096.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056591557689376/20230727-DSCF2160.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056591926800414/20230727-DSCF2170.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056592392355861/20230727-DSCF2182.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056594795692053/20230731-DSCF2259.jpg",
  },
];

const gallery2 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056595714261083/20230731-DSCF2296.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056434476818575/20230727-DSCF2128.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056588642648145/20230727-DSCF2123.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056435647029399/20230727-DSCF2206.jpg",
  },
];

const gallery3 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056435110170755/20230727-DSCF2196.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056589196312737/20230727-DSCF2153.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056592975376534/20230727-DSCF2224.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056593591926854/20230727-DSCF2231.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056594267222166/20230727-DSCF2248.jpg",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1145056436255199232/20230727-DSCF2243.jpg",
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
