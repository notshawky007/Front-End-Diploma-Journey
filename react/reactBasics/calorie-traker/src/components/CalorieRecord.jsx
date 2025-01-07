import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
function CalorieRecord(props) {
  return (
    <ul className="calorie-record">
      <li className="date">
        <CalorieRecordDate />
      </li>
      <li className="meal-type">{props.data.mealType}</li>
      <li className="content">{props.data.content}</li>
      <li className="calorie-count">{props.data.calorieCount} calories</li>
      <li className="calorie-goal">Goal: {props.data.calorieGoal} calories</li>
    </ul>
  );
}

export default CalorieRecord;
