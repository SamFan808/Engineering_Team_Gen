const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// array to store team profile objects
const teamRoster = [];
// creates manager profile
function start() {
  console.log("Hello manager, let's make your team");
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameManager",
        message: "Please enter your name:",
        validate: (response) =>
          response === "" ? console.log("Name cannot be left blank") : true,
      },
      {
        type: "input",
        name: "idManager",
        message: "Please enter your ID number:",
        validate: (response) => {
          const num = response.match(/\d+$/);
          if (num) {
            return true;
          } else {
            return "ID must be a number.";
          }
        },
      },
      {
        type: "input",
        name: "emailManager",
        message: "Please enter your email address:",
        validate: (response) => {
          const okay = response.match(/\S+@\S+\.\S+/);
          if (okay) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        },
      },
      {
        type: "input",
        name: "officenumber",
        message: "Please enter your office number:",
        validate: (response) => {
          const num = response.match(/\d+$/);
          if (num) {
            return true;
          } else {
            return "ID must be a number.";
          }
        },
      },
    ])
    .then(function (data) {
      const manager = new Manager(
        data.nameManager,
        data.idManager,
        data.emailManager,
        data.officenumber
      );
      teamRoster.push(manager);
      addTeam();
    });
}
// initiates team member profile selection
function addTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message:
          "Would you like to add additional team members? Choose from the following options:",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any additional members",
        ],
      },
    ])
    .then(function (data) {
      if (data.role === "Intern") {
        createIntern();
      } else if (data.role === "Engineer") {
        createEngineer();
      } else {
        makeTeam();
      }
    });
}
// creates intern profile
function createIntern() {
  console.log("Intern Questions");
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameIntern",
        message: "Please enter Intern's name:",
        validate: (response) =>
          response === "" ? console.log("Name cannot be left blank") : true,
      },
      {
        type: "input",
        name: "idIntern",
        message: "Please enter Intern's ID number:",
        validate: (response) => {
          const num = response.match(/\d+$/);
          if (num) {
            return true;
          } else {
            return "ID must be a number.";
          }
        },
      },
      {
        type: "input",
        name: "emailIntern",
        message: "Please enter Intern's email address:",
        validate: (response) => {
          const okay = response.match(/\S+@\S+\.\S+/);
          if (okay) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        },
      },
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
    .then(function (data) {
      const intern = new Intern(
        data.nameIntern,
        data.idIntern,
        data.emailIntern,
        data.school
      );
      teamRoster.push(intern);
      addTeam();
    });
}
// creates engineer profile
function createEngineer() {
  console.log("Engineer Questions");
  inquirer
    .prompt([
      {
        type: "input",
        name: "nameEngineer",
        message: "Please enter Engineer's name:",
        validate: (response) =>
          response === "" ? console.log("Name cannot be left blank") : true,
      },
      {
        type: "input",
        name: "idEngineer",
        message: "Please enter Engineer's ID number:",
        validate: (response) => {
          const num = response.match(/\d+$/);
          if (num) {
            return true;
          } else {
            return "ID must be a number.";
          }
        },
      },
      {
        type: "input",
        name: "emailEngineer",
        message: "Please enter Engineer's email address:",
        validate: (response) => {
          const okay = response.match(/\S+@\S+\.\S+/);
          if (okay) {
            return true;
          } else {
            return "Please enter a valid email address.";
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter Engineer's GitHub user name",
        validate: (response) =>
          response === ""
            ? console.log("GitHub user name cannot be left blank")
            : true,
      },
    ])
    .then(function (data) {
      const engineer = new Engineer(
        data.nameEngineer,
        data.idEngineer,
        data.emailEngineer,
        data.github
      );
      teamRoster.push(engineer);
      addTeam();
    });
}
// creates final html file
function makeTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamRoster), "utf8");
}

start();
