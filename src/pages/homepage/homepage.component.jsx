import React from "react";

import "./homepage.styles.scss";

const HomePage = (props) => (
  <div>
    <button onClick={() => props.history.push("/drum")}>Drums</button>
    <button onClick={() => props.history.push("/guitar")}>Guitar</button>
  </div>
);

export default HomePage;
