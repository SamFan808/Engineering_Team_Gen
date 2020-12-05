const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");

const makeEngineer = render.renderEngineer;
const makeIntern = render.renderIntern;
const makeManager = render.renderManager;
const makeMain = render.renderMain;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name",
        validate: (response) =>
          response === "" ? console.log("Name cannot be left blank") : true,
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your ID number",
        validate: (response) =>
          response === "" ? console.log("ID cannot be left blank") : true,
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address",
        validate: (response) =>
          response === "" ? console.log("Email cannot be left blank") : true,
      },
      {
        type: "list",
        name: "role",
        message: "Please select an employee role from the list",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(function ({ name, id, email, role }) {
      switch (role) {
        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message:
                  "Please enter the name of the University/College that you graduated from",
                validate: (response) =>
                  response === ""
                    ? console.log("School name cannot be left blank")
                    : true,
              },
            ])
            .then(function ({ school }) {
              makeIntern(name, role, email, id, school);
              addEmployee();
            });
          break;
        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "Please enter your GitHub user name",
                validate: (response) =>
                  response === ""
                    ? console.log("GitHub user name cannot be left blank")
                    : true,
              },
            ])
            .then(function ({ github }) {
              makeEngineer(name, id, email, github);
              addEmployee();
            });
          break;
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "officenumber",
                message: "Please enter your Office number",
                validate: (response) =>
                  response === ""
                    ? console.log("Office number cannot be left blank")
                    : true,
              },
            ])
            .then(function ({ officenumber }) {
              makeManager(name, id, email, officenumber);
              addEmployee();
            });
          break;
      }
    });

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addemployee",
        message: "Would you like to add another employee?",
      },
    ])
    .then(function ({ addEmployee }) {
      console.log("Add additional employees", addEmployee);
      if (addEmployee) {
        questions();
      } else {
        makeMain();
      }
    })
    .catch((err) => {
      console.log("Error adding employees", err);
      throw err;
    });
}

questions();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
