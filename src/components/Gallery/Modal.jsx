import { RxCross2 } from "react-icons/rx";

export default function Modal({ clickedImg, setClickedImg }) {
  const handleClick = (e) => {
    setClickedImg(null);
  };

  return (
    <>
      <div className="overlay" onClick={handleClick}>
        <img src={clickedImg} alt={clickedImg} />
        <span onClick={handleClick}>
          <RxCross2 onClick={handleClick} />
        </span>
      </div>
    </>
  );
};

