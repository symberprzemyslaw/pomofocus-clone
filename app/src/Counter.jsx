import  { useState, useEffect } from 'react';
  
const Counter = ({play, time, setTime}) => {
    let minutes = Math.floor(time / 60).toLocaleString('en-US', {
        minimumIntegerDigits : 2,
        useGrouping : false
    }) 
    let seconds = Math.floor(time % 60).toLocaleString('en-US', {
        minimumIntegerDigits : 2,
        useGrouping : false
    }) 
  
    useEffect(() => { // przeniesienie tej funkcji do display? uzycie false/true do naliczania
  
        if(time !== 0){
        //Implementing the setInterval method
        const interval = setInterval(() => {

                setTime(time - 1);
                console.log('hi')
            }, 1000);
            return () => clearInterval(interval);
        } else {
            play()
        }
  
        //Clearing the interval
    }, [time]);
    // must add some number formating
    return <h1>{minutes} : {seconds}</h1>;
}


export default Counter;
