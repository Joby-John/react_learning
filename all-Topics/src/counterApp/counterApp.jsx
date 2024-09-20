import React ,{useState} from "react";
import styles from './counterApp.module.css'
function Counter()
{

    const increaseCount = () =>
    {
        setNumber(number+1);
    }

    const DecreaseCount = () =>
        {

            number>0?setNumber(number-1):setNumber(0);
        }
    
    const Reset = () =>
    {
        setNumber(0);
    }

    const [number, setNumber] = useState(0);
    return (
        <div className={styles.container}>
            <h1 className={styles.number}>{number}</h1>

            <div className={styles.buttonContainer}>
            <button onClick={increaseCount} className={styles.increase}>Increase</button>
            <button onClick={DecreaseCount} className={styles.decrease}>Decrease</button>
            <button onClick={Reset} className={styles.reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;