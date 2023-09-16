import { useState, useEffect } from "react";
import Counter from "./Counter";
import ring from './assets/ring.mp3';

const Display = () => {
  const [time, setTime] = useState(1 * 60);
  const [action, setAction] = useState('Start');
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(false);
  const [isPomodoroSet, setPomodoro] = useState(true);

  const container = document.querySelector(".container");
  const play = () => new Audio(ring).play();
  const reset = () => {
    setCounting(false);
    setAction('Start');
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
      play();
      setCount((prevCount) => prevCount + 1);
      reset();
    }
  }, [time]);

  return (
    <div className="display">
      <button onClick={() => {
        container.style.backgroundColor = "rgb(186, 73, 73)";
        setTime(25 * 60);
        setPomodoro(true)
      }}>Pomodoro</button>
      <button onClick={() => {
        container.style.backgroundColor = "rgb(56, 133, 138)";
        setTime(5 * 60);
        setPomodoro(false)
      }}>Short Break</button>
      <button onClick={() => {
        container.style.backgroundColor = "rgb(57, 112, 151)";
        setTime(15 * 60);
        setPomodoro(false)
      }}>Long Break</button>
      <Counter play={play} time={time} setTime={setTime} counting={counting} />
      <button onClick={handleTime}>{action}</button>
      <div className="count">
        #{count}
      </div>
    </div>
  );
};

export default Display;