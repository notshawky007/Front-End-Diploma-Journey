//practice with es6 classes
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
  }
}

const person1 = new Person("Shawky", 23, "Developer");

const person2 = new Person("Ahmed", 25, "Designer");

console.log(person1);
console.log(person2);
