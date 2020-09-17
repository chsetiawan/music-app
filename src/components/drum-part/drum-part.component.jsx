import React from "react";

import "./drum-part.component.scss";

const DrumPart = ({ name, sound, num }) => {
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[num];
    audioEl.play();
  };

  return (
    <div>
      <button onMouseOver={playAudio} onClick={playAudio}>
        <span>{name}</span>
      </button>
      <audio className="audio-element">
        <source src={sound}></source>
      </audio>
    </div>
  );
};

export default DrumPart;
