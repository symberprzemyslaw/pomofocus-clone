import { useEffect } from 'react';
import propTypes from 'prop-types';

const Counter = ({ time, setTime, counting, timeOut, setFillPercent, fillPercent}) => {
  
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
        setFillPercent((time / timeOut) * 100 / 60)
        document.querySelector('.fill').style.width = `${fillPercent}%`
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, counting]);



  //Showing time in title
  document.title = minutes + ":" + seconds
  return <h1 className='timer'>{minutes} : {seconds}</h1>;
};

Counter.propTypes = {
  time: propTypes.number.isRequired,
  setTime: propTypes.func.isRequired,
  counting: propTypes.bool.isRequired,
  timeOut: propTypes.number.isRequired,
  setFillPercent: propTypes.func.isRequired,
  fillPercent: propTypes.number.isRequired,
};


export default Counter;