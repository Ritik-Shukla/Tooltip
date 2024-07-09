import { useState } from 'react';
import './App.css';
import ToolPit from './components/tooltip';


function App() {
  const [selectedButton, setSelectedButton] = useState('top');
  const [position, setPosition] = useState('top');

  //function called when position button is clicked

  function handleButtonClick(event) {
    //getting the position of the toolpit from the buttons
    setPosition(prevPostion => {
      return prevPostion = event.target.value;
    })
    //making the button selected
    setSelectedButton(event.target.value);
  }


  return (
    <div className="container">
      <h2>ToolTip</h2>
      <div className='button-container'>
        <button onClick={handleButtonClick} value="left" className={selectedButton === "left" ? "selected" : ""}>Left</button>
        <button onClick={handleButtonClick} value="right" className={selectedButton === "right" ? "selected" : ""}>Right</button>
        <button onClick={handleButtonClick} value="top" className={selectedButton === "top" ? "selected" : ""}>Top</button>
        <button onClick={handleButtonClick} value="bottom" className={selectedButton === "bottom" ? "selected" : ""}>Bottom</button>
      </div>
      <ToolPit position={position} />
    </div>
  );
}

export default App;
