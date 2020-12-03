const Employee = require("./Employee");

class Intern extends Employee {
  // pass arguments to Intern, and to the Employee object
  constructor(name, id, email, school, role) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {}
}

// const intern = new Intern("Steve", 5, "steve@sam.sam", "CU Boulder");
// console.log(intern);
