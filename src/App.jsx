import "./App.css";
import Header from "./components/Header";
import CalendarWeek from "./components/CalendarWeek";
import useState from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <CalendarWeek />
      </div>
    </div>
  );
}

export default App;
