import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "../css/MeditationPage.css";
import { useEffect, useState } from "react";
function MeditationPage() {
  let timeLimit = 900;

  function onPlay() {
    let timer = setInterval(() => {
      timeLimit--;
      console.log(timeLimit);
      if (timeLimit === 0) {
        clearInterval(timer);
      } else {
        let minutes = Math.floor(timeLimit / 60);
        let seconds = timeLimit - minutes * 60;
        document.getElementById("content").innerHTML = minutes + ":" + seconds;
      }
    }, 1000);
  }

  return (
    <div className="fake-body-1">
      <div className="music-player hidden">
        <ReactAudioPlayer src="Meditation.mp3" autoPlay />
      </div>
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
      <div id="content" contentEditable="false">
        15:00
      </div>
      <div id="content2">Just breath</div>
      <button
        className="fas fa-pause"
        style={{
          display: "flex",
          fontSize: 40,
          position: "absolute",
          right: "50%",
          marginTop: 30,
        }}
        onClick={onPlay}
      />
    </div>
  );
}

export default MeditationPage;
