import styles from './updater.module.css'
import React , {useState} from 'react';

function Updater()
{

    const [count, setCount] = useState(0);

    function increment(){

        //Takes the PENDING STATE to calculate NEXT state.
        //React puts your updater function in a queue (waiting in line)
        //During the nex render, React will call them in same order
        //recomended to use updater function when ever possible
        setCount( c => c+1);
    };

    function decrement(){
        setCount(c => c-1);
    };

    function reset(){
        setCount(0);
    };
    return(
        <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
                <button onClick={reset}>Reset</button>
        </div>)
}

export default Updater;