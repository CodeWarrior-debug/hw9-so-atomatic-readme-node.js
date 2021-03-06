// TODO: Include packages needed for this application

const inq =require('inquirer');
const fs = require('fs');
const generate=require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// array of questions for user input
const questions = [
    'Description: Please describe this project?','Outline: Provide a Table of Contents', 'Installation: What are the required steps to install?', 'Usage: What is it supposed to be used for?', 'License: What license will you select?', 'Contributing: How can others contribute?', 'Tests: RESEARCH WHAT THE HECK THIS IS', 'QUESTIONS: RESEARCH ALSO'
];

// TODO: Create a function to write README file
    //function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
for (i of questions)
    inquirer.prompt([
        {
            type: 'input',
            message: `${questions[i]}`,
            name: (`${questions[i]}`).split(':')[0],
        }
    ])
}

// Function call to initialize app
init();
