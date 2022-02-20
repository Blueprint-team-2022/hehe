import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useEffect } from "react";
import "../css/MusicPage.css";
function MusicPage() {
  return (
    <div className="fake-body-2">
      <div className="music-player hidden">
        <ReactAudioPlayer
          id="music-player"
          src="Meditation.mp3"
          autoPlay
          controls
        />
      </div>
      <div className="row">
        <div className="text col-md-6 col-sm-12">
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
          <h1 className="h1-main">Unravel</h1>
          <p className="p-main">TK from 凛として時雨</p>
        </div>
        <div
          className="right col-md-6 col-sm-12"
          style={{ maxWidth: "80% !important" }}
        >
          <img
            src="music-1.jpg"
            alt=""
            style={{
              margin: "0 auto",
              display: "flex",
              marginTop: "25vh",
              height: "50vh",
              width: "50vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
