class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    console.log(this.name);
  }
  getId() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    console.log(this.role);
  }
}

// const employee = new Employee("Sam", 156, "sam@sam.sam");
// employee.getName();
// employee.getId();
// employee.getEmail();
// employee.getRole();

module.exports = Employee;
