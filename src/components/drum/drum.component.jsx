import React from 'react';

import './drum.styles.scss';

import DrumPart from '../drum-part/drum-part.component';
import DRUM_PARTS_DATA from '../../pages/drumpage/drum-parts.data';

class Drum extends React.Component {
  constructor() {
    super();
    
    // this.escFunction = this.escFunction.bind(this);

    this.state = {
      drumParts: DRUM_PARTS_DATA
    }
  }
  // escFunction(event){
  //   if(event.keyCode === 27) {
  //     console.log('yes');
  //   }
  // }
  // componentDidMount(){
  //   document.addEventListener("keydown", this.escFunction, false);
  // }
  // componentWillUnmount(){
  //   document.removeEventListener("keydown", this.escFunction, false);
  // }

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