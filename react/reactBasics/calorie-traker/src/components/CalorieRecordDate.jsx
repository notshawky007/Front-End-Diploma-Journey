import "./CalorieRecordDate.css";

function CalorieRecordDate() {
  const date = new Date();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="date-container">
      <p className="month">{month}</p>
      <p className="day">{day}</p>
      <p className="year">{year}</p>
    </div>
  );
}

export default CalorieRecordDate;
