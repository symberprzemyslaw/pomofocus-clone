import { useState, useEffect } from "react";
import Counter from "./Counter";
import ring from './assets/ring.mp3';

const Display = () => {
  const [time, setTime] = useState(25 * 60);
  const [action, setAction] = useState('START');
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(false);
  const [isPomodoroSet, setPomodoro] = useState(true);
   // const [fill, setFill] = useState(0)

  const container = document.querySelector(".container");
  const startBtn = document.querySelector(".start-btn")
  const play = () => new Audio(ring).play();

  //the main screen should return to pomodoro
  //and after pomodoro should return to short brake
  //if pomodoro counter is @ 2 === 0 it should return to long brake
  
  const reset = () => {
    setCounting(false);
    setAction('START');
    setTime(25 * 60)
    container.style.backgroundColor = "rgb(186, 73, 73)"
    startBtn.style.color = "rgb(186, 73, 73)";
  };
  const handleTime = () => {
    if (action === 'START') {
      setAction('PAUSE');
    } else {
      setAction('START');
    }

    setCounting((prevCounting) => !prevCounting);
  };
  //this function will handle the time for the pomodoro, short brake and long brake
  const handleButton = (time, pomodoro, action, color) => {
    setTime(time * 60);
    setPomodoro(pomodoro)
    setCounting(false)
    setAction(action)
    if (color === 'red'){
      container.style.backgroundColor = "rgb(186, 73, 73)";
      startBtn.style.color = "rgb(186, 73, 73)";
    }
    if (color === 'green'){
      container.style.backgroundColor = "rgb(56, 133, 138)";
      startBtn.style.color = "rgb(56, 133, 138)";
    }
    if (color === 'blue'){
      container.style.backgroundColor = "rgb(57, 112, 151)";
      startBtn.style.color = "rgb(57, 112, 151)";
    }
  }

  useEffect(() => {
    if (time === 0 && isPomodoroSet) {
      play()
      setCount((prevCount) => prevCount + 1);
      reset();
    } else if (time === 0) {
      play()
      reset()
    }
  }, [time]);
  return (
    <>

    <div className="percantage">
      <div className="fill">
      </div>
    </div>

    <div className="display">
        {/* Pomodoro timer setting */}
      <button onClick={() => {
        handleButton(25, true, 'START', 'red')
      }}>Pomodoro</button>
        {/* Short break timer setting */}
      <button onClick={() => {
        handleButton(5, false, 'START', 'green')
      }}>Short Break</button>
        {/* Long break timer setting */}
      <button onClick={() => {
        handleButton(15, false, 'START', 'blue')
      }}>Long Break</button>
        {/* Timer */}
      <Counter play={play} time={time} setTime={setTime} counting={counting} />
      <button onClick={handleTime} className="start-btn">{action}</button>
      <div className="count">
        <p>
        # {count}
        </p>
        <button className="reset-btn" onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
    </>
  );
};

export default Display;