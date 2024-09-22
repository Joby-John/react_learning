import React, {useState, useEffect} from "react";

function WindowSizeDisplayer()
{

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>
    {
        document.title = `Size:${width}x${height}`;

    }, [width, height]);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event Listener added");


        return()=>{
            window.removeEventListener("resize", handleResize);
            console.log("Event listener Removed");
        }
    }, [])
    

    function handleResize()
    {
        setHeight(h=> h = window.innerHeight);
        setWidth(w => w = window.innerWidth );
    }
    return(<>
    <p>Window Height: {height}px</p>
    <p>Window Width: {width}px</p>
    </>);
}

export default WindowSizeDisplayer;