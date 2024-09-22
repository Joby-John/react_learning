import styles from './componentD.module.css'
import React, {useContext} from 'react';
import { UserContext } from '../componentA/componentA.jsx';


function ComponentD()
{
    const  user = useContext(UserContext);
    return(
        <div className={styles.box}>
            <h1>Component D</h1>
            <h2>{`Bye ${user.user} ${user.lastName}`}</h2>
        </div>
    );
}

export default ComponentD;