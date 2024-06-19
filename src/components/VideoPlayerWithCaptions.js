import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { CaptionContext } from "../context/CaptionContext";
 import "../styles/VideoPlayerWithCaptions.css";

function VideoPlayerWithCaptions({ videoUrl }) {
  const { captions } = useContext(CaptionContext);
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  return (
    <div>
      <ReactPlayer url={videoUrl} onProgress={handleProgress} controls />
      <div className="captions">
        {captions.map((caption, index) => (
          <div key={index} className="caption">
            {currentTime >= caption.start && currentTime <= caption.end && (
              <span>{caption.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayerWithCaptions;
