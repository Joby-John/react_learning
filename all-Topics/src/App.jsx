//1. PROPS

//import Student from "./Student.props.jsx"

// function App() {
//  return(
//  <>
//     <Student name = "Spongebob" age = {30} isStudent = {true}/>
//     <Student name = "Patrik" age= {25} isStudent = {false}/>
//     <Student name = "Squidward" age = {50} isStudent = {false}/>
//     <Student name = "Sandy" age = {25} isStudent = {true}/>
//     < Student name = "Larry"/>
//   </>)
//   }

// export default App


//2. Conditional rendering


// import UserGreeting from "./conditionalRendering/conditionalRendering.jsx";

// function App()
// {
//   return (
//     <>
//       < UserGreeting isLoggedIn = {true} username = "Joby John"/>
//     </>
//   );
// }

// export default App;


//3.Renedring Lists
// import List from "./renderingLists/renderingLists.jsx" 

// function App()
// {
// const fruits = [{id:1, name:"apple", calories: 95},
//               {id:2, name:"orange", calories: 45}, 
//               {id:3, name:"banana", calories: 105}, 
//               {id:4, name:"coconut", calories:159}, 
//               {id:5, name:"pineapple", calories:37}];


// const vegetables = [{id:6, name:"potatoes", calories: 100},
//                     {id:7, name:"celery", calories: 15}, 
//                     {id:8, name:"carrots", calories: 25}, 
//                     {id:9, name:"corn", calories:63}, 
//                     {id:10, name:"brocoli", calories:50}];

//   const meats = [];

//   return (<>
//   <List items={fruits} category = "Fruits"/>
//   <List items = {vegetables} category = "Vegetables"/>
//   <List items = {meats} category = "Meats"/>
//   </>
//   );
// }

// export default App;


//4.click events in react
//click event = an intercation when a user clicks on a specific element.
//              We can respond to clicks by passing a callback to the onClick event handler


// import Click from './clickEvents/clickEvents.jsx'


// function App()
// {
//   return (<>
//   < Click emoji = {"🌞"}/>
//   </>)
// }

// export default App;


//5. useState and Hook

//React hook = Special function that allows functional components
//             to use React features without writing class components(React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallBack, and more)

//useState() = A React hook that allows the creation of a stateful variable
//              and a setter function to update its value in the virtual DOM.
//              [name, setName]

//import UseState from "./useStateAndHook/useStateAndHook.jsx";
// function App()
// {
//   return (
//     <UseState/>
//   );
// }

// export default App;

// import Counter from "./counterApp/counterApp.jsx";

// function App()
// {
//   return(
//     <>
//     <Counter/>
//     </>
//   );
// }

// export default App;

//6. onChange = event handler used primarily with form elements
//              eg.<input>, <textarea>, <select>, <radio>
//              Triggers a function every time the value of the input changes

// import OnChange from "./onChange/onChange.jsx";
// function App()
// {
//     return(
//       <OnChange/>
//     );
// }

// export default App;



//7. Updater function  = A function passed as an argument to setState() usually 
//                       eg. setYear(arrow function )
//                       Allow for safe updates based on the previous state
//                       used with multiple state updates and asynchronous functions
//                       good practice to use updater functions

// import Updater from "./updaterFuntion/updater.jsx";
// function App()
// {
//   return (
    
//     <Updater/>
//   )
// }
// export default App;


//8. Update Objects in state

// import ObjectState from "./objectsState/objectState.jsx";
// function App()
// {
//   return (
//     <ObjectState/>
//   );
// }

// export default App;

//9. Array state

// import ArrayState from "./arrayState/arrayState.jsx";
// function App()
// {
//   return (
//     <ArrayState/>
//   );
// }

// export default App;

// //10. state of array of objects
// import ArrayOfObjects from "./arrayOfObject/arrayOfObject.jsx";
// function App()
// {
//   return (
//     <ArrayOfObjects/>
//   );
// }

// export default App;


//11. useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//                  This component re-renders
//                  This component mounts(when a component is created and appended to DOM)
//                  The state of a value

//useEffect(function, [dependencies])

//1. useEffect(() => {}) //Runs after every re-render
//2. useEffect(() => {}, []) //Runs only on Mount
//3. useEffect(() =>{}, [value]) //Runs on mount + when value changes


//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts 

import UseEffect from "./useEffectHook/useEffect.jsx";
import WindowSizeDisplayer from "./useEffectWindowSize/windowSize.jsx";

function App()
{
  return (
    <>
    <UseEffect/><br/><br/>
    <WindowSizeDisplayer/>
    </>
  );
}

export default App;
