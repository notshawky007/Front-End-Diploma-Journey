import CalorieRecord from "./CalorieRecord";

function RecordList() {
  const records = [
    {
      recordData: new Date().toLocaleDateString(),
      mealType: "Breakfast",
      content: "Eggs and Beans on Toast",
      calorieCount: 350,
      calorieGoal: 500,
    },
    {
      recordData: new Date().toLocaleDateString(),
      mealType: "Lunch",
      content: "Chicken Salad",
      calorieCount: 450,
      calorieGoal: 500,
    },
    {
      recordData: new Date().toLocaleDateString(),
      mealType: "Dinner",
      content: "Spaghetti Bolognese",
      calorieCount: 750,
      calorieGoal: 500,
    },
    {
      recordData: new Date().toLocaleDateString(),
      mealType: "Snack",
      content: "Chocolate Bar",
      calorieCount: 200,
      calorieGoal: 500,
    },
  ];

  return (
    <div className="records-container">
      {records.map((record, index) => (
        <CalorieRecord key={index} data={record} />
      ))}
    </div>
  );
}

export default RecordList;
