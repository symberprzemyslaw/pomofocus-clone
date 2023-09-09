import { useState, useEffect } from "react";
import  Counter  from "./Counter"
import ring from './assets/ring.mp3'

const Display = () => {
    const [time, setTime] = useState((2 * 60))
    const [action, setAction] = useState('Start')
    const [count, setCount] = useState('#0')
    const container = document.querySelector(".container")
    const play = () => new Audio(ring).play()
    console.log(container)


    const handleTime = () => {
        // divide by 60 seconds + remaider
        if( action === 'Start'){
            setAction('Pause')
        } else {
            setAction('Start')
        }

        // if(time !== 0) {
        //     useEffect( () => {

        //         setInterval( () => {
        //             setTime(time - 1)
        //         },1000)
                
        //     },[time]
        //     )
        // }
    }
    return ( 
        <div className="display">
            <button onClick={ () => {
                container.style.backgroundColor = "rgb(186, 73, 73)"
                setTime(25 * 60)
            }}>Pomodoro</button>
            <button onClick={ () => {
                container.style.backgroundColor = "rgb(56, 133, 138)"
                setTime(5 * 60)
            }}>Short Break</button>
            <button onClick={ () => {
                container.style.backgroundColor = "rgb(57, 112, 151)"
                setTime(15 * 60)
            }}>Long Break</button>
            <Counter time={time} setTime={setTime} play={play}/>
            <div className="timer">{time}</div>
            <button onClick={handleTime}>{action}</button>
            <div className="count">
                {count}
            </div>
        </div>
     );
}
 
export default Display;