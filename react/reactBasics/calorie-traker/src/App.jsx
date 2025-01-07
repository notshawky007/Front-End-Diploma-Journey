import "./App.css";
import CalorieRecord from "./components/CalorieRecord";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Calorie Tracker</h1>
      <div className="records-container">
        <CalorieRecord
          data={{
            recordData: new Date().toLocaleDateString(),
            mealType: "Breakfast",
            content: "Eggs and Beans on Toast",
            calorieCount: 350,
            calorieGoal: 500,
          }}
        />
        <CalorieRecord
          data={{
            recordData: new Date().toLocaleDateString(),
            mealType: "Lunch",
            content: "Chicken Salad",
            calorieCount: 450,
            calorieGoal: 500,
          }}
        />
        <CalorieRecord
          data={{
            recordData: new Date().toLocaleDateString(),
            mealType: "Dinner",
            content: "Spaghetti Bolognese",
            calorieCount: 750,
            calorieGoal: 500,
          }}
        />
        <CalorieRecord
          data={{
            recordData: new Date().toLocaleDateString(),
            mealType: "Snack",
            content: "Chocolate Bar",
            calorieCount: 200,
            calorieGoal: 500,
          }}
        />
      </div>
      <div className="summary-container">
        <h2 className="summary-title">Calorie Summary</h2>
        <p className="summary-text">Total Calories: 1750</p>
        <p className="summary-text">Calorie Goal: 2000</p>
      </div>
    </div>
  );
}

export default App;
