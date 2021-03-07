// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your name?','What is your quest?'];
const names = ['name','quest'];

// TODO: Create a function to write README file*********************status: test ********************
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    inquirer
    .prompt(
        [
            {type: 'input', message: questions[0], name: names[0]},
            {type: 'input', message: questions[1], name: names[1]},
            {type: 'input', message: questions[2], name: names[2]},
            {type: 'input', message: questions[3], name: names[3]},
            {type: 'input', message: questions[4], name: names[4]},
            {type: 'input', message: questions[5], name: names[5]},
            {type: 'input', message: questions[6], name: names[6]},
            {type: 'input', message: questions[7], name: names[7]},
            {type: 'input', message: questions[8], name: names[8]},
            {type: 'input', message: questions[9], name: names[9]},
        
        
        
        
        ])
    .then((answer) => {  
        console.log("Hello " + answer.name);
        console.log("Hello " + answer.quest);
    });

}

// fs.writeFile('new.md',generatemd(answer), function(err){
//     if (err) return console.log(err);
// })




function generatemd(answer){return
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <h1>${prompt.name['quest'].answer}!<h1>
    </head>
    <body>
        
    </body>
    </html>`
}

// Function call to initialize app
init();