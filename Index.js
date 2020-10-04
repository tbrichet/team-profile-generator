// Reference Variables
const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
const createPage = require("../src/template.html");

const fs = require("fs");
const inquirer = require("inquirer");

// Set up Arrays
const employeeArray = [];
const idArray = [];