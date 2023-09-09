import  { useState, useEffect } from 'react';
  
const Counter = ({time, play}) => {
    const [count, setCount] = useState(time * 60);
    const formattedNum = num => {
        num > 10 ? num : '0' + num
    }
  
    useEffect(() => { // przeniesienie tej funkcji do display? uzycie false/true do naliczania
  
        if(count !== 0){
        //Implementing the setInterval method
        const interval = setInterval(() => {

                setCount(count - 1);
                console.log('hi')
            }, 1000);
            return () => clearInterval(interval);
        } else {
            play()
        }
  
        //Clearing the interval
    }, [count]);
    // must add some number formating
    return <h1>{Math.floor(count / 60) } : {(count % 60) }</h1>;
}


export default Counter;
