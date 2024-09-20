import React, {useState} from 'react'


function UseState()
{

    const [name, setName] = useState("Guest"); //useState return an array so we destructure it and store it in two variables
    const [age, setAge] = useState(0);
    const [isEmployed ,setIsEmployed] = useState(false);

    const update = ()=>
    {
        updateName();
        updateAge();
    }
    const updateName = ()=>{
        setName("Spongebob");
    
    }

    const updateAge = ()=>{
        setAge(age+1);
    }

    const changeEmployment = () =>{
        setIsEmployed(!isEmployed);
    }
    return(
        <div className='employeeDetails'>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Employment Status: {isEmployed?`Yes`:`No`}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={updateAge}>IncreaseAge</button>
            <button onClick={changeEmployment}>Toggle Employement</button>
        </div>
    );

}

export default UseState;