import React, {useState} from "react";


function ObjectState()
{
    const [car, setCar] = useState({year:2026,
                                    make:"Porsche", 
                                    model:"GT3 RS"});
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const Day = days[new Date().getDay()];
    
    const handleYearChange = (event)=>
    {
        setCar( c => ({...c, year: event.target.value}));
    }

    const handleMakeChange = (event)=>
        {
            setCar( c=> ({...c, make: event.target.value}));
        }

    const handleModelChange = (event)=>
        {
            {
                setCar(c => ({...c, model: event.target.value}));
            }
        }

    return (
        <div>
            <h1> Car Picker </h1>
            <p> Today is  {Day}, take {car.make} {car.model} {car.year}</p>
            <label>Year:</label>
            <input type="number" value={car.year} onChange={handleYearChange}></input><br></br>

            <label>Make:</label>
            <input type="text" value={car.make} onChange={handleMakeChange}></input><br></br>

            <label>Model:</label>
            <input type="text" value={car.model} onChange={handleModelChange}></input>
            
        </div>
    );
}

export default ObjectState;