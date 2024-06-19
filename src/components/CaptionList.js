import React, { useContext } from "react";
import { CaptionContext } from "../context/CaptionContext";
import "../styles/CaptionList.css";

function CaptionList() {
  const { captions, removeCaption } = useContext(CaptionContext);

  const handleRemove = (index) => {
    removeCaption(index);
  };

  return (
    <div>
      <h2>Captions</h2>
      {captions.map((caption, index) => (
        <div key={index} className="caption-item">
          <span>
            {caption.text} ({caption.start} - {caption.end})
          </span>
          <button onClick={() => handleRemove(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CaptionList;
