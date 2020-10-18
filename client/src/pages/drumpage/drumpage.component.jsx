import React from "react";
import axios from 'axios';
import ImageMapper from "react-image-mapper";

import "./drumpage.styles.scss";

import Drum from "../../components/drum/drum.component";
import DRUM_DATA from "../drumpage/drum-parts.data";

// const getDrumCoords = () => {
//   axios.get('https://localhost:8080/')
//     .then((res) => {
//       console.log(`Drum coordinates have been received!`);
//       return res.data;
//     })
//     .catch(() => {
//       console.log(`Drum coordinates not received `);
//     })
// }

const map = DRUM_DATA.drumCircleCoords;

const playAudio2 = (num) => {
  const audioEl = document.getElementsByClassName("audio-element")[num];
  audioEl.play();
};

const DrumPage = (props) => (
  <div class="drum-page">
    <button id='homepage-button-drums' className='homepage-button' onClick={() => props.history.push("/")}>Homepage</button>
    <div className="drum-image">
      <Drum />
      <ImageMapper
        src={
          "https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/29584_22183_popup.jpg"
        }
        map={map}
        onClick={(map, index, e) => playAudio2(index)}
        onMouseMove={(map, index, e) => playAudio2(index)}
        onImageClick={(e) => console.log("clicked on image")}
      />
    </div>
  </div>
);

export default DrumPage;