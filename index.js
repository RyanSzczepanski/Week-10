const render = require("./src/template.js");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const output_dir = path.resolve(__dirname, "output")
const outputPath = path.join(output_dir, "team.html");
const teamMembers = [];
const idArray = [];

function main() {
    function createManager() {
        console.log("Create your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's id?",
                validate: answer => {
                    if (!isNaN(parseInt(answer)) && parseInt(answer) > 0) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {
                    if (!isNaN(parseInt(answer)) && parseInt(answer) > 0) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });

        function createEngineer() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is your engineer's name?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is your engineer's id?",
                    validate: answer => {
                        if (!isNaN(parseInt(answer)) && parseInt(answer) > 0) {
                            return true;
                        }
                        return "Please enter a positive number greater than zero.";
                    }
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your engineer's email?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is your engineer's GitHub username?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
            });
        }

        function createIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },
                {
                    type: "input",
                    name: "internId",
                    message: "What is your intern's id?",
                    validate: answer => {
                        if (!isNaN(parseInt(answer)) && parseInt(answer) > 0) {
                            return true;
                        }
                        return "Please enter a positive number greater than zero.";
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your intern's email?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's school?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                }
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamMembers.push(intern);
                idArray.push(answers.internId);
                createTeam();
            });
        }
    }
    createManager()
}



// let employee = new Intern("Name", 0, "employee@email.com", "Github")
// console.log(`Name: ${employee.getName()}
// Id: ${employee.getId()}
// Email: ${employee.getEmail()}
// Role: ${employee.getRole()}
// School: ${employee.getSchool()}`);


main();