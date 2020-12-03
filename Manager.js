const Employee = require("./Employee");

class Manager extends Employee {
  // pass arguments to Manager, and to the Employee object
  constructor(officeNumber, role) {
    super(role);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

const manager = new Manager(801);
console.log(manager);
