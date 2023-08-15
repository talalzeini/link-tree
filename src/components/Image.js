import React, { useEffect, useState } from "react";
import "../App.css";
import SmileImage from "../assets/images/bitmoji/smile.webp";
import WinkImage from "../assets/images/bitmoji/wink.webp";

const ImageSwitcher = () => {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const winkInterval = setInterval(() => {
      setImagePath(WinkImage);
    }, 3000);

    const smileInterval = setInterval(() => {
      setImagePath(SmileImage);
    }, 1750);

    return () => {
      clearInterval(winkInterval);
      clearInterval(smileInterval);
    };
  }, []);

  return (
    <div>
      {imagePath ? (
        <img className="profile-image" src={imagePath} alt="Bitmoji" />
      ) : (
        <img className="profile-image" src={SmileImage} alt="Default Bitmoji" />
      )}
    </div>
  );
};

export default ImageSwitcher;