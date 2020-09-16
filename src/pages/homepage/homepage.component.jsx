import React from 'react';

import './homepage.styles.scss';

import Cymbal from '../../components/music-test/music-test.component';

const HomePage = () => (
  <div>
  <Cymbal sound={'https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-CRASH1.mp3'} num={0}/>
  <Cymbal sound={'https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-Bdrum1.mp3'} num={1}/>
  </div>
)

export default HomePage;