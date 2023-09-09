import { useState } from "react";

const Display = () => {
    const [time, setTime] = useState('25:00')
    const [action, setAction] = useState('Start')
    const [count, setCount] = useState('#0')
    const container = document.querySelector(".container")


    const handleTime = () => {
        
        let seconds = 150000 // miliseconds
        let minutes = 25
        console.log(seconds - 1000)
        setInterval(console.log(seconds - 1000), 1000)
    }
    handleTime()
    return ( 
        <div className="display">
            <button onClick={ () => {
                container.style.backgroundColor = "rgb(186, 73, 73)"
            }}>Pomodoro</button>
            <button onClick={ () => {
                container.style.backgroundColor = "rgb(56, 133, 138)"
            }}>Short Break</button>
            <button onClick={ () => {
                container.style.backgroundColor = "rgb(57, 112, 151)"
            }}>Long Break</button>
            <div className="timer">{time}</div>
            <button>{action}</button>
            <div className="count">
                {count}
            </div>
        </div>
     );
}
 
export default Display;