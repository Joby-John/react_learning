import React,{useRef, useEffect, useState} from "react";
import styles from './StopWatch.module.css'

function StopWatch()
{
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(()=>
    {
        if(isRunning)
        {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now()- startTimeRef.current); // renders when setElapsed is called, to calculte how many seconds past starting gone
            },10)
        }

        return ()=>{
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    function start()
    {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime; // to store the starting time
    }

    function stop()
    {
        setIsRunning(false);
    }

    function reset()
    {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime()
    {

        let hours = Math.floor(elapsedTime/(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor((elapsedTime/1000)%60);
        let milliSeconds = Math.floor((elapsedTime%1000)/10);

        hours = String(hours).padStart(2,'0');
        minutes = String(minutes).padStart(2,'0');
        seconds = String(seconds).padStart(2,'0');
        milliSeconds = String(milliSeconds).padStart(2,'0');

        console.log(minutes);
        return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }


    return (
        <div className={styles.stopWatch}>
            <div className={styles.display}>{formatTime()}</div>
            <div className={styles.controls}>
                <button onClick={start} className={styles.startButton}>Start</button>
                <button onClick={stop} className={styles.stopButton}>Stop</button>
                <button onClick={reset} className={styles.resetButton}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;