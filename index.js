// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("generateMarkdown");

// array of questions for user input
const questions = [
    'Description: Please describe this project?', 'Outline: Provide a Table of Contents?', 'Title?', 'Installation: What are the required steps to install?', 'Usage: What is it supposed to be used for?', 'Contributing: How can others contribute?', 'Tests: RESEARCH WHAT THE HECK THIS IS', 'QUESTIONS: RESEARCH ALSO', 'Pick your license below:'
];

// TODO: Create an array of questions for user input
const names = ['description', 'toc', 'title', 'installation', 'usage', 'contributing', 'tests', 'questions', 'license'];

 //     1           2       3           4              5                   7              8        9           10
// ['description', 'toc', 'title', 'installation', 'usage', , 'contributing', 'tests', 'questions', 'license'];

// TODO: Create a function to write README file*********************status: test ********************
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(
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
                {type: 'input', message: questions[2], name: names[2]},
                {type: 'input', message: questions[3], name: names[3]},
                {type: 'input', message: questions[4], name: names[4]},
                {type: 'input', message: questions[5], name: names[5]},
                {type: 'input', message: questions[6], name: names[6]},
                {type: 'input', message: questions[7], name: names[7]},
                {
                    type: 'rawlist',
                    message: questions[8],
                    name: names[8],
                    choices: ['MIT', 'Apache']
                },
            ])
        .then((answers) => {

            // const myAnswer = `This is working! ${names[1]} now`; // [answer.description];

            fs.writeFile('new.md', generateMarkdown(answers), function (err) {
                if (err) return console.log(err);
                // fs.writeFile('new.md',generatemd(myAnswer), function(err){
                //     if (err) return console.log(err);
            })
        })
}



//{
// const myAnswer = [answer.description];
// fs.writeFile('new.md',generatemd(myAnswer), function(err){
//     if (err) return console.log(err);
// })

// fs.writeFile('new.md',generatemd(answer), function(err){
//     if (err) return console.log(err);
//['Description', 'TOC','Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];

// console.log(answer.names[1]);

// console.log("Hello " + answer.name);
// console.log("Hello " + answer.quest);


// Function call to initialize app
init();