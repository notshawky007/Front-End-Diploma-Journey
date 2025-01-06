//Challenge 1

function Laptop(brand, model, batteryPrecentage) {
  this.brand = brand;
  this.model = model;
  this.batteryPrecentage = batteryPrecentage;
}

Laptop.prototype.useSoftware = function () {
  this.batteryPrecentage -= 15;
  if (this.batteryPrecentage < 20) {
    console.log("Please charge the battery");
  }
};

Laptop.prototype.charge = function () {
  this.batteryPrecentage += 25;
  if (this.batteryPrecentage > 100) {
    this.batteryPrecentage = 100;
  }
};

Laptop.prototype.checkBattery = function () {
  if (this.batteryPrecentage === 100) {
    console.log("Battery is full");
  }
  console.log(this.batteryPrecentage);
};

const laptop1 = new Laptop("Apple", "MacBook Pro", 100);
const laptop2 = new Laptop("Dell", "Inspiron", 50);

laptop1.useSoftware();
laptop1.checkBattery();
laptop1.charge();
laptop1.checkBattery();

laptop2.useSoftware();
laptop2.checkBattery();
laptop2.charge();
laptop2.checkBattery();
