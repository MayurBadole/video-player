import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { CaptionContext } from "../context/CaptionContext";
import "../styles/VideoPlayerWithCaptions.css";

function VideoPlayerWithCaptions({ videoUrl, setError }) {
  const { captions } = useContext(CaptionContext);
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className="player-body">
      <ReactPlayer
        url={videoUrl}
        onProgress={handleProgress}
        onError={handleError}
        controls
        className="video-player"
      />
      {captions && captions.length > 0 && (
        <div className="captions">
          {captions.map(
            (caption, index) =>
              currentTime >= caption.start &&
              currentTime <= caption.end && (
                <div key={index} className="caption">
                  <span>{caption.text}</span>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default VideoPlayerWithCaptions;
