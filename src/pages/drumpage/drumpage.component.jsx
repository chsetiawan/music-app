import React from "react";
import ImageMapper from "react-image-mapper";

import "./drumpage.styles.scss";

import Drum from "../../components/drum/drum.component";

const map = {
  name: "drum-pic",
  areas: [
    { id: 0, shape: "circle", coords: [92, 300, 60], preFillColor: "" },
    { id: 1, shape: "circle", coords: [98, 130, 60], preFillColor: "" },
    { id: 2, shape: "circle", coords: [220, 173, 60], preFillColor: "" },
    { id: 3, shape: "circle", coords: [342, 143, 60], preFillColor: "" },
    { id: 4, shape: "circle", coords: [467, 92, 60], preFillColor: "" },
    { id: 5, shape: "circle", coords: [222, 318, 60], preFillColor: "" },
    { id: 6, shape: "circle", coords: [428, 290, 60], preFillColor: "" },
    { id: 7, shape: "circle", coords: [307, 445, 60], preFillColor: "" },
    { id: 8, shape: "circle", coords: [158, 505, 60], preFillColor: "" },
    { id: 9, shape: "circle", coords: [319, 318, 60], preFillColor: "" },
  ],
};

const DrumPage = () => (
  <div className="drum-image">
    <Drum />
    <ImageMapper
      src={
        "https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/29584_22183_popup.jpg"
      }
      map={map}
      onClick={(map, index, e) => console.log("you clicked me")}
      onImageClick={(e) => console.log("clicked")}
    />
  </div>
);

export default DrumPage;
