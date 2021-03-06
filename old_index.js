const fs= require('fs')
const inquirer= require('inquirer')

inquirer.prompt([
    {
    type: 'input',
    Message: 'What is your name?',
    name: 'name'
},
{
    type: 'input',
    Message: 'Where are you located?',
    name: 'location'
},
{
    type: 'input',
    Message: 'What is your Git URL?',
    name: 'git'
}])

fs.writeFile('new.html',generateHTML(answers), function(err){
    if (err) return console.log(err);

})

function generateHTML(answer){return
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${promt.name}!
    </head>
    <body>
        
    </body>
    </html>`
}
