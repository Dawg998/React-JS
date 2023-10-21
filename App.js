import logo from "./logo.svg";
import ExpenseItem from "./components/ExpenseItem";
import Expenditure from "./components/Expenditure";

function App() {

  const expenses = [
    { title: "Health Insurance",price: "$55.55", date: new Date()},
    { title: "Bike Insurance",price: "$25.55", date: new Date()},
    { title: "Life Insurance",price: "$35.55", date: new Date()},
    { title: "Car Insurance",price: "$45.55", date: new Date()},
  ];

  return (
    <div className="App">
      <p>Let's get started</p>
       <Expenditure item={expenses}/>
    </div>
  );
}

export default App;
