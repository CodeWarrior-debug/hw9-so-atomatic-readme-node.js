// Including packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user input
const questions = [
    'Title?','Description: Please describe this project?', 'Installation: What are the required steps to install?', 'Usage: What is it supposed to be used for?', 'Contributing: Who contributed, and how can others contribute?', 'Tests: What tests should be run before using this tool?', 'Questions: Where should a user turn with questions...enter your Github username?', 'Pick your license below:',"What's your email?"
];

// array of answer names for user input
const names = ['title','description', 'installation', 'usage', 'contributing', 'tests', 'questions', 'license', 'email'];

function init() { // function to initialize app, then write readme file

    inquirer
        .prompt(                                //listing all questions
            [{
                    type: 'input',
                    message: questions[0],
                    name: names[0]
                },
                {
                    type: 'input',
                    message: questions[1],
                    name: names[1]
                },
                {
                    type: 'input',
                    message: questions[2],
                    name: names[2]
                },
                {
                    type: 'input',
                    message: questions[3],
                    name: names[3]
                },
                {
                    type: 'input',
                    message: questions[4],
                    name: names[4]
                },
                {
                    type: 'input',
                    message: questions[5],
                    name: names[5]
                },
                {
                    type: 'input',
                    message: questions[6],
                    name: names[6]
                },
                {
                    type: 'rawlist',
                    message: questions[7],
                    name: names[7],
                    choices: ['MIT', 'Apache']
                },
                {
                    type: 'input',
                    message: questions[8],
                    name: names[8],
                },
            ])
        .then((answers) => {  //taking the answers as one large object

            fs.writeFile('README.md', generateMarkdown(answers), function (err) {  //writing the markdown file
                if (err) return console.log(err);
            })
        })
}

init();