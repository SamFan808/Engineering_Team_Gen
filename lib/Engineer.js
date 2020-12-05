const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

// const engineer = new Engineer("sam", 4, "jorts@sam.sam", "Jerbs");
// console.log(engineer);
module.exports = Engineer;
