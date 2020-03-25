import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onTextChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a hui"}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onTextChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
