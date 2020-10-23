const fs = require('fs');

// Pull from Card Templates
const createManagerCard = require("../templates/managertemplate.js");
const createEngineerCard = require("../templates/engineertemplate.js");
const createInternCard = require("../templates/interntemplate.js");

const createPage = employeeArray => {
    console.log(employeeArray);
    // console.log(Object.keys(employeeArray[0]));
    // console.log(Object.keys(employeeArray[0])[3]);
    // console.log(Object.keys(employeeArray[1]));
    // console.log(Object.keys(employeeArray[2]));
    const employeeCard = employeeData => {
        employeeData.forEach(employee => {
            if(Object.keys(employee)[3] === "officeNumber") {
                console.log("This is a manager.");
                return createManagerCard(employee);

            } else if (Object.keys(employee)[3] === "github") {
                console.log("This is an engineer.");
                return createEngineerCard(employee);

            } else {
                console.log("This is an intern.");
                return createInternCard(employee);
            }
        });  
    }
    //employeeCard(employeeArray);

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nunito" />
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid" style="background-color:white">
            <div class="container">
            <h1 class="display-4 vh-25" style="text-align:center; font-family:Verdana; font-size:50px; font-weight:bold; color: limegreen">Welcome!<br>Here is your team:</h1>
            </div>
        </div>

        <div class="container-fluid vh-200" style="background-image: url('https://images.pexels.com/photos/1048039/pexels-photo-1048039.jpeg?cs=srgb&dl=pexels-scott-webb-1048039.jpg&fm=jpg'); background-size:cover;">

        <div class="container" style="padding:20px">
        <div class="row" style="align-items:center">
        ${employeeCard(employeeArray)}
        </div>
        </div>
        </div>
    </body>
    </html>
    `
}

module.exports = createPage;