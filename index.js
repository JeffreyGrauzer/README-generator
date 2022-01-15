// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
     
       {
           type: 'input',
           name: 'name',
           message: 'What is your name?'
       },
       {
           type: 'input',
           name: 'github username',
           message: 'What is your GitHub username?'
       },
       {
           type: 'input',
           name: 'email',
           message: 'What is your email address?'
       },
       {
           type: 'input',
           name: 'project title',
           message: 'What is the title of your project?'
       },
       {
           type: 'input',
           name: 'description',
           message: 'Describe your project.'
       },
       {
           type: 'input',
           name: 'installation instructions',
           message: 'What are the installation instructions?'
       },
       
     ]
    

  
// TODO: Create a function to write README file
function writeToFile(readmeMarkdown, inquirer, err) {
     generateMarkdown();
}
// TODO: Create a function to initialize app
function init() {
     return inquirer.prompt(questions).then((answers) => {
        writeToFile("readmeMarkdown.md", generateMarkdown(answers));
    });
     
}

// Function call to initialize app
 init();
