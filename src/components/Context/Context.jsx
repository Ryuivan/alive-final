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
            src="https://cdn.discordapp.com/attachments/1163153427833036931/1171673259117395999/2_Banner.Workout.png"
            alt="spandukNews"
          />
        ) : (
          <img
            className="posterNews"
            src="https://cdn.discordapp.com/attachments/1163153427833036931/1171677794598670417/A3_Workshop.png" 
            alt="posterNews" 
          />
        )}
      </div>
    </div>
  );
}
