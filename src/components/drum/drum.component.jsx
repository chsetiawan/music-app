import React from 'react';

import './drum.styles.scss';

import DrumPart from '../drum-part/drum-part.component';
import DRUM_PARTS_DATA from '../../pages/drumpage/drum-parts.data';

class Drum extends React.Component {
  constructor() {
    super();

    this.state = {
      drumParts: DRUM_PARTS_DATA
    }
  }

  render() {
    return (
      <div className="drum-parts-container">
        {
          this.state.drumParts.map(({ name, sound, num, keyCode }) => (
            <DrumPart key={num} name={name} sound={sound} num={num} keyCode={keyCode} />
          ))
        }
      </div>
    )
  }
}

export default Drum;