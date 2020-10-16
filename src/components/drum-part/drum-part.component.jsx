import React, { useEffect, useCallback } from "react";

import "./drum-part.component.scss";

const DrumPart = ({ name, sound, num, keyCode }) => {
  const escFunction = useCallback((event) => {
    if(keyCode.includes(event.keyCode)) {
      console.log(`you played: ${name}, letter pressed: ${String.fromCharCode(event.keyCode)}`)
      playAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[num];
    audioEl.play();
  };

  return (
    <div className="drum-part-div">
      <button className={`${name}`} onMouseOver={playAudio} onClick={playAudio}>
        <span>{name}</span>
      </button>
      <audio className="audio-element">
        <source src={sound}></source>
      </audio>
    </div>
  );
};

export default DrumPart;