import React, {useState} from "react";

function ArrayState()
{
    const [foods, setFoods]  = useState([]);

    const addFood = ()=>{
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);

    }

    const removeFood = (index)=>{
        setFoods(foods.filter(( element , i) => i!==index));
        
    } 

    return<div>

        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index)=>
                        <li key={index} onClick={() => removeFood(index)}>
                            {food}
                        </li>)
            }
        </ul>    

        <input type="Text" id="foodInput" placeholder="Enter Food name"></input>
        <button onClick={addFood} >Add Food</button>
    </div>;
}

export default ArrayState;