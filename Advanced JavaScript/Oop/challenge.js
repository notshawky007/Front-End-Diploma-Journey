//Challenge 1
//Create constructor function for Laptop with properties: brand, model, batteryPrecentage and methods: useSoftware deacrease batteryPrecentage by 15% and charge increase batteryPrecentage by 25% and batterPrecentage don't exceed 100% and checkBattery if batteryPrecentage is less than 20% log "Please charge the battery" if batteryPrecentage is 100% log "Battery is full" and log the batteryPrecentage

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
