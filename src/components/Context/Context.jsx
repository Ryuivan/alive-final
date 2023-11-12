import { useState, useEffect } from "react";
import "./Context.css";

export default function Context() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="putihNews-bg">
      <div className="d-flex justify-content-center">
        {screenWidth > 991 ? (
          <img
            className="spandukNews"
            src="https://cdn.discordapp.com/attachments/1163153427833036931/1172931171194257418/3_Banner.Talkshow.png"
            alt="spandukNews"
          />
        ) : (
          <img
            className="posterNews"
            src="https://cdn.discordapp.com/attachments/1163153427833036931/1172931173316558978/3_Poster_Igs.Talkshow.png" 
            alt="posterNews" 
          />
        )}
      </div>
    </div>
  );
}
