import { useState } from "react";


function ArrayOfObjects()
{

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function addCar()
    {
        const newCar = { year: carYear,
                         make: carMake,
                         model: carModel
                       };

        setCars (c=>[...c , newCar])

        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");

    }

    function removeCar(i)
    {
        setCars( c => c.filter(( _ , index) => i!==index));
    }

    function changeYear(event)
    {
        setCarYear(event.target.value)
    }
    function changeMake(event)
    {
        setCarMake(event.target.value)
    }

    function changeModel(event)
    {
        setCarModel(event.target.value)
    }


    return<div>
            <h1>Cars</h1>
            <ul>
                {cars.map((car, index)=>
                <li key={index} onClick={()=>removeCar(index)}>
                    {car.make} {car.model} {car.year}</li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={changeYear}/><br />
            <input type="text" value={carMake} placeholder= "Enter car Make" onChange={changeMake} /><br />
            <input type="text" value={carModel} placeholder="Enter car Model" onChange={changeModel}/>
            <button onClick={addCar}>Add Car</button>
    </div>;
};

export default ArrayOfObjects;

