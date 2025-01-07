import "./App.css";
import RecordList from "./components/RecordList";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Calorie Tracker</h1>
      <RecordList />
      <div className="summary-container">
        <h2 className="summary-title">Calorie Summary</h2>
        <p className="summary-text">Total Calories: 1750</p>
        <p className="summary-text">Calorie Goal: 2000</p>
      </div>
    </div>
  );
}

export default App;
