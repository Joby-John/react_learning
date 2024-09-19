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
import List from "./renderingLists/renderingLists.jsx" 

function App()
{
const fruits = [{id:1, name:"apple", calories: 95},
              {id:2, name:"orange", calories: 45}, 
              {id:3, name:"banana", calories: 105}, 
              {id:4, name:"coconut", calories:159}, 
              {id:5, name:"pineapple", calories:37}];


const vegetables = [{id:6, name:"potatoes", calories: 100},
                    {id:7, name:"celery", calories: 15}, 
                    {id:8, name:"carrots", calories: 25}, 
                    {id:9, name:"corn", calories:63}, 
                    {id:10, name:"brocoli", calories:50}];

  const meats = [];

  return (<>
  <List items={fruits} category = "Fruits"/>
  <List items = {vegetables} category = "Vegetables"/>
  <List items = {meats} category = "Meats"/>
  </>
  );
}

export default App;