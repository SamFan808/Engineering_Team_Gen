const Employee = require("./Employee");

class Manager extends Employee {
  // pass arguments to Manager, and to the Employee object
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
}
