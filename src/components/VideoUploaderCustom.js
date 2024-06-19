import React, { useState } from "react";
import "../styles/VideoUploader.css";

function VideoUploadersCustom({ setVideoUrl }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoUrl(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <button type="submit">Load Video</button>
    </form>
  );
}

export default VideoUploadersCustom;
