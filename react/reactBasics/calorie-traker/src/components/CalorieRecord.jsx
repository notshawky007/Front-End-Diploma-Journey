import "./CalorieRecord.css";

function CalorieRecord(props) {
  return (
    <ul className="calorie-record">
      <li className="record-data">{props.data.recordData}</li>
      <li className="meal-type">{props.data.mealType}</li>
      <li className="content">{props.data.content}</li>
      <li className="calorie-count">{props.data.calorieCount} calories</li>
      <li className="calorie-goal">Goal: {props.data.calorieGoal} calories</li>
    </ul>
  );
}

export default CalorieRecord;
