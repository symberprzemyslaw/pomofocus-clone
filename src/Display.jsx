import { useState, useEffect } from "react";
import Counter from "./Counter";
import ring from './assets/ring.mp3';
import tick from './assets/tick.mp3';

const Display = () => {
  const [time, setTime] = useState(25 * 60);
  const [action, setAction] = useState('START');
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(false);
  const [isPomodoroSet, setPomodoro] = useState(true);
  const [timeOut, setTimeOut] = useState(25);
  const [fillPercent, setFillPercent] = useState(100)
  const container = document.querySelector(".container");
  const startBtn = document.querySelector(".start-btn")
  const play = () => new Audio(ring).play();
  const tickSound = () => new Audio(tick).play();
//this function reset the timer
  const reset = () => {
    document.querySelector('.fill').style.width = `100%`
    setCounting(false);
    setAction('START');
    setTime(25 * 60)
    if (count % 2 === 0 && count !== 0) {
      handleButton(15, false, 'START', 'blue')
    } else {
      handleButton(5, false, 'START', 'green')
    }

  };
  //this function handle the start and pause button
  const handleTime = () => {
    if (action === 'START') {
      setAction('PAUSE');
    } else {
      setAction('START');
    }
    tickSound()
    setCounting((prevCounting) => !prevCounting);
  };

  //this function handle the time for the pomodoro, short brake and long brake
  const handleButton = (time, pomodoro, action, color) => {
    document.querySelector('.fill').style.width = `100%`
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
    setTimeOut(time)

  }
  //this function updates count and reset the timer
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
      <Counter play={play} time={time} setTime={setTime} counting={counting} timeOut={timeOut} setFillPercent={setFillPercent} fillPercent={fillPercent}/>
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