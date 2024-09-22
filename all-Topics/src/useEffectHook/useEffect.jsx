import React, {useState, useEffect} from "react";

function UseEffect()
{
    const [count, setCount]  = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(()=>{
    //     document.title = `Count:${count} ${color}`;

    //     return ()=>
    //     {
    //         //some cleanup code
    //     }
    // }, [count, color]);

    function addCount()
    {
        setCount(c => c+1);
    }

    function subCount()
    {
        setCount (c => c-1);
    }

    const changeColor = ()=>
    {
        setColor(c => c === "red"?"green":"red");
    }
    
    return <>
       <p style={{color :color}}>Count: {count}</p>
       <button onClick={addCount}>Add</button>
       <button onClick={subCount}>Substract</button>
       <button onClick={changeColor}>change Color</button>
    </>
}

export default UseEffect;