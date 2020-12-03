const Employee = require("./Employee");

class Engineer extends Employee {
  // pass arguments to Engineer, and to the Employee object
  constructor(github, role) {
    super(role);
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {}
}

const engineer = new Engineer("pooptyPants");
console.log(engineer);
