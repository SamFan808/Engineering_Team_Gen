const Employee = require("./Employee");

class Engineer extends Employee {
  // pass arguments to Engineer, and to the Employee object
  constructor(name, id, email, github, role) {
    super(role);
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.github = github;
    this.role = "Engineer";
  }
  getGithub() {}
}

const engineer = new Engineer("Sam", 1, "sam@sam.sam", "SamFan");
console.log(engineer);
