//practice of this and bind
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype.showInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
};

const person1 = new Person("Shawky", 23, "Developer");
const person2 = new Person("Ahmed", 25, "Designer");

console.log(person1);
console.log(person2);

//bind method
const showInfo1 = person1.showInfo.bind(person1);
const showInfo2 = person2.showInfo.bind(person2);

showInfo1();
showInfo2();

//call method

person1.showInfo.call(person1);
person2.showInfo.call(person2);

//apply method

person1.showInfo.apply(person1);
person2.showInfo.apply(person2);

//bind method with arguments
const showInfo1WithArgs = person1.showInfo.bind(
  person1,
  "Shawky",
  23,
  "Developer"
);

showInfo1WithArgs();

//call method with arguments
person1.showInfo.call(person1, "Shawky", 23, "Developer");

//apply method with arguments
person1.showInfo.apply(person1, ["Shawky", 23, "Developer"]);
