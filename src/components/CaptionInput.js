import React, { useState, useContext } from "react";
import { CaptionContext } from "../context/CaptionContext";
import "../styles/CaptionInput.css";

function CaptionInput() {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const { addCaption } = useContext(CaptionContext);

  const handleAddCaption = () => {
    if (text.trim() && !isNaN(start) && !isNaN(end)) {
      addCaption({ text, start: Number(start), end: Number(end) });
      setText("");
      setStart("");
      setEnd("");
    } else {
      alert("Please enter valid numbers for start and end times");
    }
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setStart(value);
    }
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setEnd(value);
    }
  };

  return (
    <div className="caption-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter caption text"
      />
      <input
        type="text"
        value={start}
        onChange={handleStartChange}
        placeholder="Start time (s)"
      />
      <input
        type="text"
        value={end}
        onChange={handleEndChange}
        placeholder="End time (s)"
      />
      <button onClick={handleAddCaption}>Add Caption</button>
    </div>
  );
}

export default CaptionInput;
