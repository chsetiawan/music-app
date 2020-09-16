import React from "react";


const Cymbal = ({ sound }) => {
  
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  return (
    <div>
    <button onClick={playAudio}>
      <span>Play Audio</span>
    </button>
    <audio className="audio-element">
      <source src={sound}></source>
    </audio>
  </div>
  );
};

export default Cymbal;