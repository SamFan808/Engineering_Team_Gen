class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    role = "Employee";
    console.log(role);
  }

  printInfo() {
    for (const key in this) {
      console.log(`${key}: ${[key]}`);
    }
  }
}
const employee = new Employee();
employee.printInfo();

module.exports = Employee;
