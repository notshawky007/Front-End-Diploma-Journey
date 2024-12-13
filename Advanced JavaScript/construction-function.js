//practice of construction function
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  // this.showInfo = function () {
  //   console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
  // };
}

Person.prototype.showInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
};

const person1 = new Person("Shawky", 23, "Developer");
const person2 = new Person("Ahmed", 25, "Designer");

console.log(person1);
console.log(person2);

console.log(person1.__proto__);
console.log(person2.__proto__);

console.log(person1.__proto__ === person2.__proto__);

person1.showInfo();
person2.showInfo();
