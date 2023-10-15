import React, { useState } from "react";
import Modal from "./Modal";
import "./Masonry.css";

const gallery1 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788556672741466/PLENO_3_20_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=38b3a8f6fcb37c2d48fd07f9e7879df659b99f2738d99fe4e3b6eacc24f80884&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788467468275792/PLENO_3_10_of_43_copy.webp?ex=651d855b&is=651c33db&hm=64e0c9133725df631f0b750d8e0831460023fc66c62457c75fa4867763ebe6ca&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788558245605459/PLENO_3_16_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=5063c5d7ba7a989abbdfd360bd69c3f0a8a2c9dcecfa3f0eaa27a81109f7c42e&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788470848892979/PLENO_3_9_of_43_copy.webp?ex=651d855c&is=651c33dc&hm=b74b68f154de054c040d34057b8f0d6ad9875485b14c97e0100d1aa7fa899f62&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788626130407494/PLENO_3_23_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=867a10b9c41c897b3f4adb6064222c08d529f1505fea52863a9ac63d3a80b570&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158673406963761172/PLENO_3_36_of_43_copy.webp?ex=651d1a33&is=651bc8b3&hm=e899649ce3544cf4eca74726d58ae87050972b936349cfa9f667cf6b29fcc362&g",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788625622900756/PLENO_3_21_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=4b7226a233eea6f33f5b3d6e33a25c7d5cfebdb24c161ac4a60a71429a17bf1c&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788627543900321/PLENO_3_28_of_43_copy.webp?ex=651e2e42&is=651cdcc2&hm=fda81f1797475fe6073f2663c3bbdd016ead46650810ce4547bb1b8d9e9feebb&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788626415624335/PLENO_3_24_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=663e3cce01056674f82283b4ad94f4321b6a1edf7c1d129fd427b9e2a0a312f2&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788625874567198/PLENO_3_22_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=dd1af26928fc932d728e40283a6981e5e441f79bfdf337671185b1987d5985e3&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788627850072165/PLENO_3_29_of_43_copy.webp?ex=651e2e42&is=651cdcc2&hm=16c6862c7b1fa1739157808c621895f8059905a0539378aee04dd18b99b8df8d&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788822503530597/PLENO_3_38_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=4bb3daeac86ad47ace94704ba74286bccaa61474d54a7459e43a7a313b51e0a0&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788820288934041/PLENO_3_32_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=cf1369d6085fd0bb89ca3f40164e143a2d217597df79bf37abe7f4a9520120f6&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788822834888714/PLENO_3_39_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=e7aa1baa602047424994a31bd33cb4a590913cc21e8473532ae6b7bffe87c104&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788827071119461/PLENO_3_43_of_43_copy.webp?ex=651e2e71&is=651cdcf1&hm=d4f0a49e3d4d70744bc15919fb0924add8a5d9d6e1896fc5971e827ac6c1e98b&&",
  },
];

const gallery2 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158665523198959616/PLENO_3_40_of_43_copy.webp?ex=651e645b&is=651d12db&hm=204c9f1d34a6d388b357c2bb1c472ead8c97f107305d2eeaf0c9e655bcaecc49&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788468751740948/PLENO_3_4_of_43_copy.webp?ex=651d855c&is=651c33dc&hm=1ac13ab6b31dd6e90b844655a89f6c0b180165168c1d8bf5a922457f0a038b6f&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788469338951811/PLENO_3_6_of_43_copy.webp?ex=651d855c&is=651c33dc&hm=430b71fbf89b24bd5b3c52b82647167dba4262512a60d56f44a85d263fab2124&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788556962136164/PLENO_3_11_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=c22baac7703f457a86014318404381f08d8f93bfdb997a5631ccc048e83ece95&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788557205422090/PLENO_3_12_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=6f4610577032057a1d474d2bcc352c995573a966822413b2d185e5607a43bfba&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788557448687676/PLENO_3_13_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=96773c78855f74ddca7d84b234d3b6c088d6f6355d55605db14c1f43796985de&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788627288039507/PLENO_3_27_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=18349d3be5111a710332b192ad748cb1e8595afe266549fbe0189a5db02c0bb2&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788627007016971/PLENO_3_26_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=047e13eef93f141ceeb3d8a69d10e2f0d45dfee746203b531ff2047e47c1ec6e&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788557700333598/PLENO_3_14_of_43_copy.webp?ex=651e2e31&is=651cdcb1&hm=8e9f51648cdadd49ad38992a00370fc2b53c523cb6aaf3087117570172dd457b&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788821136183379/PLENO_3_34_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=454208bf2db574f18ce8c5c6110b4e96c81a8a2f2b189b428dabfae323cc96e2&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788823224950884/PLENO_3_41_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=0f59f3be93a984ff6b729ab49fd39b162356927b145cc99367cf70073b7a546b&",
  },
];

const gallery3 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788558883143771/PLENO_3_18_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=a9a67bb7428a3104fe711062063ba0dd839c92bf413bf84b864e1bb9509e1cab&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788468110004294/PLENO_3_2_of_43_copy.webp?ex=651d855c&is=651c33dc&hm=483123da205b5040a10f47eee1769730eacbc03e8286a2dd4749acb262c29fa9&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788557943619594/PLENO_3_15_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=a6e78912f41c196d9043bfc74fce704e02f69598232a1a42134b04a352b877f7&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788467782856704/PLENO_3_1_of_43_copy.webp?ex=651d855b&is=651c33db&hm=a35c5a61aa019cd63f290721a6d3e080574f1f732ef259c53d2bdbc26e6ace84&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788819865313331/PLENO_3_31_of_43_copy.webp?ex=651e2e6f&is=651cdcef&hm=d456eadd88612432c790264ad27b7a86f2e2d0cab3a224b39260397402cdd7d5&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788469007585381/PLENO_3_5_of_43_copy.webp?ex=651d855c&is=651c33dc&hm=ab7929ec1c00d9ea34cf154cfa6ab0336553db3597dda69604d578b8b8efe817&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788559164158083/PLENO_3_19_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=5cdf731b40cf0f6d0263a5edd86fe24f7258d24fcf6f8efd8f65235b2f56d25a&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788469615767622/PLENO_3_7_of_43_copy.webp?ex=651d855c&is=651c33dc&hm=b6fe0fe5ff3c773b9e0d1f55af84c1d43e307ad3c3897d58c4e503c7400b7a3d&g",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788558535000185/PLENO_3_17_of_43_copy.webp?ex=651d8571&is=651c33f1&hm=c97e5f376c6afc2ed4a029e791b81d69133e08c620b0e5dc7ea07f8271c70a8f&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788626726010960/PLENO_3_25_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=c0d66cba6354f4c9759c4ea49250b2a1fe044c02430786a49bfdc6a2d3e05ba7&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788625245409440/PLENO_3_30_of_43_copy.webp?ex=651e2e41&is=651cdcc1&hm=0abf04c1358e4d7f766c6f1579c8675a1324f69a56e0db74e5bff227fb3104ef&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788821677260821/PLENO_3_35_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=67107e001f29b886a365edbee7a57bd9051701ed901567fac16dfb904190a836&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788820716757073/PLENO_3_33_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=ee75ba5ddff16b7ce2873b85154348517b7d5a68223f672544200c9eabc1dfe6&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788822058930216/PLENO_3_37_of_43_copy.webp?ex=651e2e70&is=651cdcf0&hm=944eb8df7fd98f02183882a43d3670b3a7fdd948a61643d570a90d33669dbd4e&",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1158788819471044680/PLENO_3_42_of_43_copy.webp?ex=651e2e6f&is=651cdcef&hm=677fa8f967fbee45f80299c9013bd3b1dd4e6b46f8339ef342d48816d0b0ebfa&",
  },
];

const Pleno3 = () => {
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
          <h1>Pleno 3</h1>
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

export default Pleno3;
