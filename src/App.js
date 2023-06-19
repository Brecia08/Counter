import React, {useState} from 'react';
import './App.css';

function CounterButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  
  function reset() {
    setCount(0);
  }

  function DecreaseButton() {
    setCount(count-1);
  }
 
  return (
    <div> 
      <h1>Let's Count</h1>
      <button className='count'>({count})</button>
      <button onClick={handleClick}>Count Upwards</button>
      <button onClick={DecreaseButton}>Count Backwards</button>
      <button onClick={reset}>Restart</button>
    </div>
  );
}

export default CounterButton;
