import React, { useEffect, useState } from "react";
import "./App.css";
import CaptionProvider from "./context/CaptionContext";
import CaptionInput from "./components/CaptionInput";
import VideoPlayerWithCaptions from "./components/VideoPlayerWithCaptions";
import CaptionList from "./components/CaptionList";
import VideoUploadersCustom from "./components/VideoUploaderCustom";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(null);
  }, [videoUrl, setError]);

  return (
    <div className="App">
      <CaptionProvider>
        <h1>Video Captioner</h1>
        <VideoUploadersCustom setVideoUrl={setVideoUrl} />
        {error && (
          <div className="video-unavailable">Video is not available</div>
        )}
        {videoUrl && !error && (
          <>
            <CaptionInput />
            <VideoPlayerWithCaptions
              videoUrl={videoUrl}
              error={error}
              setError={setError}
            />
            <CaptionList />
          </>
        )}
      </CaptionProvider>
    </div>
  );
}

export default App;
