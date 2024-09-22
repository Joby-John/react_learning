import styles from './componentC.module.css'
import ComponentD from '../componentD/componentD.jsx';


function ComponentC()
{
    return(
        <div className={styles.box}>
            <h1>Component C</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC;