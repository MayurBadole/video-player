import React, { useState } from "react";
import "./App.css";
import CaptionProvider from "./context/CaptionContext";
import CaptionInput from "./components/CaptionInput";
import VideoPlayerWithCaptions from "./components/VideoPlayerWithCaptions";
import CaptionList from "./components/CaptionList";
import VideoUploadersCustom from "./components/VideoUploaderCustom";

function App() {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <div className="App">
      <CaptionProvider>
        <h1>Video Captioner</h1>
        <VideoUploadersCustom setVideoUrl={setVideoUrl} />
        {videoUrl && (
          <>
            <CaptionInput />
            <VideoPlayerWithCaptions videoUrl={videoUrl} />
            <CaptionList />
          </>
        )}
      </CaptionProvider>
    </div>
  );
}

export default App;
