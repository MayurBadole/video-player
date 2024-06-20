import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { CaptionContext } from "../context/CaptionContext";
import "../styles/VideoPlayerWithCaptions.css";

function VideoPlayerWithCaptions({ videoUrl, error, setError }) {
  const { captions } = useContext(CaptionContext);
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    setError(null);
  }, [videoUrl, setError]);

  return (
    <div>
      {error ? (
        <div className="video-unavailable">Video is not available</div>
      ) : (
        <>
          <ReactPlayer
            url={videoUrl}
            onProgress={handleProgress}
            onError={handleError}
            controls
            className="video-player"
          />
          <div className="captions">
            {captions.map((caption, index) => (
              <div key={index} className="caption">
                {currentTime >= caption.start && currentTime <= caption.end && (
                  <span>{caption.text}</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VideoPlayerWithCaptions;
