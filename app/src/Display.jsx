import { useState, useEffect } from "react";
import Counter from "./Counter";
import ring from './assets/ring.mp3';

const Display = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [action, setAction] = useState('Start');
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(false);
  const [isPomodoroSet, setPomodoro] = useState(true);

  const container = document.querySelector(".container");
  const play = () => new Audio(ring).play();
  const reset = () => {
    setCounting(false);
    setAction('Start');
    setTime(60)
  };
  const handleTime = () => {
    if (action === 'Start') {
      setAction('Pause');
    } else {
      setAction('Start');
    }

    setCounting((prevCounting) => !prevCounting);
  };

  useEffect(() => {
    if (time === 0 && isPomodoroSet) {
      setCount((prevCount) => prevCount + 1);
      reset();
      play()
    }
    if (time === 0) {
      reset()
      play()
    }
  }, [time]);
  return (
    <>
    <div className="percantage">
      <div className="fill"></div>
    </div>
    <div className="display">

      <button onClick={() => {
        container.style.backgroundColor = "rgb(186, 73, 73)";
        setTime(0.1 * 60);
        setPomodoro(true)
      }}>Pomodoro</button>
      <button onClick={() => {
        container.style.backgroundColor = "rgb(56, 133, 138)";
        setTime(0.1 * 60);
        setPomodoro(false)
      }}>Short Break</button>
      <button onClick={() => {
        container.style.backgroundColor = "rgb(57, 112, 151)";
        setTime(0.1 * 60);
        setPomodoro(false)
      }}>Long Break</button>
      <Counter play={play} time={time} setTime={setTime} counting={counting} />
      <button onClick={handleTime}>{action}</button>
      <div className="count">
        #{count}
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
    </>
  );
};

export default Display;