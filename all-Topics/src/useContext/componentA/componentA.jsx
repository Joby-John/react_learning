import React, {useState, createContext} from 'react';
import styles from './componentA.module.css'
import ComponentB from '../componentB/componentB.jsx';

export const UserContext = createContext({ user:"",
                                           lastName:""
});
function ComponentA()
{
    const [user, setUser]  = useState("Joby");
    const [lastName, setLastName] = useState("John");
    return(
        <div className={styles.box}>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value = {{user, lastName}}>
                <ComponentB/>
                
            </UserContext.Provider>
            
        </div>
    );
}

export default ComponentA;