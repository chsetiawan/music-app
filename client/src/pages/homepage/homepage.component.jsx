import React from "react";

import "./homepage.styles.scss";

const HomePage = (props) => (
  <div id="homepage-button-container">
    <button id='homepage-button-drums' className='homepage-button' onClick={() => props.history.push("/drum")}>Drums</button>
    <button id='homepage-button-guitar' className='homepage-button' onClick={() => props.history.push("/guitar")}>Guitar</button>
  </div>
);

export default HomePage;
