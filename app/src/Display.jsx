import { useState } from "react";

const Display = () => {
    const [time, setTime] = useState('25:00')
    const [action, setAction] = useState('Start')
    const [count, setCount] = useState('#0')

    const handleTime = () => {
        
        let seconds = 150000 // miliseconds
        let minutes = 25
        console.log(seconds - 1000)
        setInterval(console.log(seconds - 1000), 1000)
    }
    handleTime()
    return ( 
        <div className="display">
            <button>Pomodoro</button>
            <button>Short Break</button>
            <button>Long Break</button>
            <div className="timer">{time}</div>
            <button>{action}</button>
            <div className="count">
                {count}
            </div>
        </div>
     );
}
 
export default Display;