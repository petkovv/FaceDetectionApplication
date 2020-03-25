import React from "react";
import Tilt from "react-tilt";
import brain from "./icons8-brain-100.png";
import "./Logo.css";

const Logo = () => {
  return (
    // <a target="_blank" href="https://icons8.com/icons/set/brain">Brain icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
