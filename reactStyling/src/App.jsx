//How to style react components with css
//--------------------------------------
//(not including external frameworks or preprocessors like sass

//1.EXTERNAL //in index.css
//2.MODULES //make a folder and keep jsx file and related css in same folder, and import it to jsx
//3.INLINE // in jsx file itself

import Button from "./Button.jsx"
function App() {
    return( <Button/>);  
}

export default App
