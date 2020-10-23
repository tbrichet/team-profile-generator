// Reference Variables
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const createPage = require("./src/createPage.js");

const fs = require("fs");
const inquirer = require("inquirer");

// Set up Arrays
const employeeArray = [];

//Function to Write HTML File
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    });
};

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

            console.log("Team member created!");

            const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerOfficeNumber);
            
            // Push to Employee Array
            employeeArray.push(manager);

            // Call Function to Create Rest of the Team
            teamMembers();

        });
    }
    // Function to Create Team (after Manager Data Inputted)
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
            if (teamData.teamType === "Engineer") {
                //console.log("Engineer Created");
                createEngineer();
    
            } else if (teamData.teamType === "Intern") {
                //console.log("Intern Created");
                createIntern();

            } else {
                //console.log("Team Complete");
                teamComplete();
            }
        });
    };

    function createEngineer () {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the name of the engineer:",
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true;
                    } else {
                        console.log("Engineer name cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the engineer's ID:",
                validate: engineerIdInput => {
                    if(engineerIdInput) {
                        return true;
                    } else {
                        console.log("Enginner ID cannot be blank");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the engineer's email address:",
                validate: engineerEmailInput => {
                    if(engineerEmailInput) {
                        return true;
                    } else {
                        console.log("Engineer email cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the engineer's Github username",
                validate: engineerGithubInput => {
                    if(engineerGithubInput) {
                        return true;
                    } else {
                        console.log("Username cannot be blank.");
                        return false;
                    }
                }
            },
        ])
        .then(engineerData => {
            
            console.log("Team member created!");

            const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub);

            // Push to Employee Array
            employeeArray.push(engineer);

            // Call Function for Additional Team Members
            teamMembers();
        });
    };

    function createIntern () {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter the intern's name:",
                validate: internNameInput => {
                    if(internNameInput) {
                        return true;
                    } else {
                        console.log("Intern name cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter the intern's ID number:",
                validate: internIdInput => {
                    if(internIdInput) {
                        return true;
                    } else {
                        console.log("Intern ID cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter the intern's email address:",
                validate: internEmailInput => {
                    if(internEmailInput) {
                        return true;
                    } else {
                        console.log("Intern email cannot be blank.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the intern's school name:",
                validate: internSchoolInput => {
                    if(internSchoolInput) {
                        return true;
                    } else {
                        console.log("School name cannot be blank.");
                        return false;
                    }
                }
            }
        ])
        .then(internData => {

            console.log("Team member created!");

            const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool);
            
            // Push to Employee Array
            employeeArray.push(intern);

            // Call Function for Additional Team Members
            teamMembers();
        })
    };

    function teamComplete() {
        console.log("Team created! Open index.html to view your file.");
        fs.writeFileSync('./dist/index.html', createPage(employeeArray));
    }

    // Begin Questions with Manager Input
    managerInput();
}

// Begin Prompts in Terminal Upon Program Load
promptUser();