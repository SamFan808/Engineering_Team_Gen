const Employee = require("./Employee");

class Manager extends Employee {
  // pass arguments to Manager, and to the Employee object
  constructor(name, id, email, officeNumber, role) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// const manager = new Manager("Jim", 1, "boss@office.com", 801);
// console.log(manager);
module.exports = Manager;
