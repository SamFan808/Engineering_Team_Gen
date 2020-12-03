const Employee = require("./Employee");

class Intern extends Employee {
  // pass arguments to Intern, and to the Employee object
  constructor(school, role) {
    super(role);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {}
}

const intern = new Intern("CU Boulder");
console.log(intern);
