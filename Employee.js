class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {}
}

// const employee = new Employee("Sam", 156, "sam@sam.sam");
// console.log(employee);

module.exports = Employee;
