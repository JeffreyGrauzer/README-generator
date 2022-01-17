// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "instructions",
    message: "What are the installation instructions?",
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What are the licenses associated with this project?',
    choices: ['MIT license, Boost License, Mozilla License, Apache License'],
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('Please select a license.');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file has successfully been generated!");
  });
}
// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((answers) => {
    writeToFile("readmeMarkdown.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
