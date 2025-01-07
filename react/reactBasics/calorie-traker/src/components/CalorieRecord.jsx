import "./CalorieRecord.css";

function CalorieRecord() {
  const recordData = new Date().toLocaleDateString();
  const mealType = "Breakfast";
  const content = "Eggs and Beans on Toast";
  const calorieCount = 350;
  const calorieGoal = 500;
  return (
    <ul className="calorie-record">
      <li className="record-data">{recordData}</li>
      <li className="meal-type">{mealType}</li>
      <li className="content">{content}</li>
      <li className="calorie-count">{calorieCount} calories</li>
      <li className="calorie-goal">Goal: {calorieGoal} calories</li>
    </ul>
  );
}

export default CalorieRecord;
