import Card from './card/Card.jsx'

function App()
{
  const people = [{ name: "Joby John", age:30, partner:"Anna" },
                  {name: "A J John", age:21, partner:"Joby"},
                  {}];

  return(
    <>
    <Card people = {people}/>
    </>
  );
}

export default App;