const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

let fileName;

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title');
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmDescription',
    message: 'Would you like to provide a description of your project?',
    default: true
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your applicaiton here:',
    when: ({ confirmDescription }) => {
      if (confirmDescription) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions for installation:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instrutions here:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide your contribution for your applicaiton:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please add instructions for testing your application:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to install to your application?',
    choices: ['ISC', 'MIT License', 'Apache License 2.0',],
  },
  {
    type: 'input',
    name: 'githubName',
    message: 'Add your GitHub Username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address (Required):',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
      }
    }
  },
];


// function to write README file
function writeToFile(file, data) {
  fs.writeFile(file, generateMarkdown(data), function (err) {
    if (err) {
        return console.log(err);
    } 
    console.log("README project completed");
  })
};

// function to initialize program
const init = () => {
  inquirer.prompt(questions)
    .then(answers => {
      const generateData = generateMarkdown(answers);
      writeToFile(fileName, answers);
    })
    .catch(err => console.log(err))
};

// function call to initialize program
init();