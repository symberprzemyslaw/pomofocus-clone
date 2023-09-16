import { useEffect } from 'react';

const Counter = ({ time, setTime, counting }) => {
  let minutes = Math.floor(time / 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let seconds = Math.floor(time % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  useEffect(() => {
    if (counting && time !== 0) {
      //Implementing the setInterval method
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, counting]);

  return <h1 className='timer'>{minutes} : {seconds}</h1>;
};

export default Counter;