import React from "react";
import "../css/SceneryPage.css";
import ReactAudioPlayer from "react-audio-player";
function SceneryPage() {
  return (
    <div className="fake-body">
      <div className="music-player hidden">
        <ReactAudioPlayer
          id="music-player"
          src="Meditation.mp3"
          autoPlay
          controls
        />
      </div>
      <img
        src="mier-chen-Qn7SIsAjD4U-unsplash.jpg"
        style={{ height: "100%", width: "100%" }}
        alt=""
      />
      <a href="/" style={{ color: "black" }}>
        <i
          className="fas fa-long-arrow-left"
          style={{
            position: "absolute",
            left: "5vw",
            top: "10vh",
            fontSize: 40,
          }}
        />
      </a>
    </div>
  );
}

export default SceneryPage;
