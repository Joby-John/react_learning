import React, {useState, useEffect} from "react";
import styles from './clock.module.css';




// Full Flow Summary:

//     Component mounts: time is initialized, and the clock is rendered with the current time.
//     useEffect sets up the interval: After the first render, useEffect sets up a setInterval to update the time every second.
//     State updates every second: setInterval calls setTime(new Date()) every 1 second, which updates the time state.
//     React re-renders on state change: Each time setTime is called, React re-renders the component, updating the displayed time.
//     Cleanup on unmount: If the component is unmounted, the interval is cleared to prevent memory leaks.

// This flow continues as long as the component is mounted, ensuring that the displayed time stays accurate and up to date.



function Clock()
{
    const [time, setTime] = useState(new Date());// use useState

    //useEffect for continuous updation
    useEffect(()=>
    {
        const intervalId = setInterval( ()=>{
            setTime(new Date());
        },1000) 

        return (()=>{
            clearInterval(intervalId);
        })
    }, [])

    function formatTime()
    {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const meridium = hours>=12?"PM":"AM";
        hours %=12 || 12;
        
        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridium}`)
    }

    function padZero(number)
    {
        return(number<10?"0":"")+number;
    }

    return(
        <div className={styles.container}>
           <div className={styles.clock}>
                <span>{formatTime()}</span>
           </div>
        </div>
    );
}

export default Clock;