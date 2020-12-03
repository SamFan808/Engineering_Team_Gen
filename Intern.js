const Employee = require("./Employee");

class Intern extends Employee {
  // pass arguments to Intern, and to the Employee object
  constructor(school) {
    this.school = school;
  }
}
