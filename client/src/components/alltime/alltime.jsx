import { useState } from "react";
import "./alltime.css";


function Hallof() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleButtonClick = (image) => {
    setImageSrc(image);
  };

  return (
    <>
      <div>
        <h1>Favorite players</h1>
      </div>
      <div className="image-display">
        <div className="mesgars">
          <button type="button" onClick={() => handleButtonClick("src/assets/images/kobe.jpg")}>
            <img className="ball" alt="ball" src="src/assets/images/ball.jpg" />
          </button>
          <button type="button" onClick={() => handleButtonClick("src/assets/images/iverson.jpg")}>
            <img className="ball" alt="ball" src="src/assets/images/ball.jpg" />
          </button>
          <button type="button" onClick={() => handleButtonClick("src/assets/images/showtime.jpg")}>
            <img className="ball" alt="ball" src="src/assets/images/ball.jpg" />
          </button>
        </div>

        {imageSrc && (
          <div className="image-container">
            <img src={imageSrc} alt="Selected" />
          </div>
        )}
      </div>
    </>
  );
}

export default Hallof;

