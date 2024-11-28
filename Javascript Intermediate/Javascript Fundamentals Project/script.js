const USER_DATA = {
  firstName: "Mostafa",
  lastName: "Shawky",
  position: "Software Engineer",
  experience: 10,
  hasFinishedMilitary: false,
  coursesTaken: null,
};

function getcalculateTakenCourses(courses) {
  // DRY => Don't repeat yourself
  let result;

  if (courses === undefined) {
    result = "user didn't answer this question";
  } else if (courses === null) {
    result = "Didn't take any courses";
  } else if (typeof courses === "number") {
    result = `${courses} courses`;
  } else if (typeof courses === "object") {
    result = courses.join(" - ");
  }
  console.log(result);
  return result;
}

function getCalculatedTax(amount = 100, tax = 14) {
  const result = amount + (tax / 100) * amount;

  return result;
}

// const position = `My name is ${firstName} and my last name is ${lastName}`
const content = `
<div>
    <h1><u>Personal Data</u></h1>
    <h2 id="advice">!No Advice!</h2>
    <h2>Full name: ${USER_DATA.firstName} ${USER_DATA.lastName}</h2>
    <h2>Position: ${USER_DATA.position}</h2>
    <h2>Experience: ${USER_DATA.experience} years</h2>
    <h2>Military Service: ${
      USER_DATA.hasFinishedMilitary ? "Finished" : "Not yet"
    }</h2>
    
</div>`;
document.write(content);

// getcalculateTakenCourses(null);

// USER_DATA.coursesTaken = undefined;

// getcalculateTakenCourses(undefined);

// USER_DATA.coursesTaken = 5;

// getcalculateTakenCourses(5);
