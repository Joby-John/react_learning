import styles from './componentB.module.css'
import ComponentC from '../componentC/componentC.jsx';


function ComponentB()
{
    return(
        <div className={styles.box}>
            <h1>Component B</h1>
            <ComponentC/>
        </div>
    );
}

export default ComponentB;