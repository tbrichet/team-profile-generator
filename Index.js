// Reference Variables
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const createPage = require("./src/template.html");

const fs = require("fs");
const inquirer = require("inquirer");

// Set up Arrays
const employeeArray = [];
const idArray = [];

// Overall Function for User Prompts
function promptUser () {

    // Capture Team Manager Info
    function managerInput () {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the name of your team's manager:",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log("Manager name cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter your manager's ID:",
                validate: managerIdInput => {
                    if(managerIdInput) {
                        return true;
                    } else {
                        console.log("Manager ID cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your manager's email address:",
                validate: managerEmailInput => {
                    if(managerEmailInput) {
                        return true;
                    } else {
                        console.log("Manager email cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter your manager's office number:",
                validate: managerOfficeNumberInput => {
                    if(managerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log("Office number cannot be blank.");
                        return false;
                    }
                }
            }
        ])
        .then(managerData => {
            const manager = new Manager(managerData.ManagerName, managerData.managerId, managerData.managerEmail, managerData.managerOfficeNumber);
            
            // Push to Employee Array
            employeeArray.push(manager);

            // Push to ID Array
            idArray.push(managerData.managerId);

            // Call function to create rest of team
            teamMembers();

        });
    }
    function teamMembers() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamType",
                message: "Please select the type of team member you would like to add:",
                choices: [
                    "Engineer",
                    "Intern",
                    "Team is Complete"
                ]
            }
        ])
        .then (teamData => {
            if (teamData.teamType = "Engineer") {
                //createEngineer();
                console.log("Engineer Created");
    
            } else if (teamData.teamType = "Intern") {
                //createIntern();
                console.log("Intern Created");
            } else {
                //teamComplete();
                console.log("Team Complete");
            }
        });
    };




    managerInput();
}

promptUser();