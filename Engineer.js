const Employee = require("./Employee");

class Engineer extends Employee {
  // pass arguments to Engineer, and to the Employee object
  constructor(github, role) {
    super(role);
    this.github = github;
    role = "Engineer";
  }
}

const engineer = new Engineer();
engineer.printInfo();
