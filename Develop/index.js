const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
const path = require('path');

console.log('Hello! Create a README for your project by answering the following questions');

// array of questions for user
const questions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'gitHubUsername',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                }
                return false;
            }
        },

        {
            type: 'input',
            name: 'titleOfProject',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                }
                return false;
            }
        }, {
            type: 'input',
            name: 'projectDescription',
            message: 'Please write a short description of your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                }
                return false;
            }
        }, {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of license should your project have?',
            choices: [{
                    name: 'MIT',
                },
                {
                    name: 'APACHE2.0',
                },
                {
                    name: 'GPL3.0',
                },
                {
                    name: 'BSD3',
                },
                {
                    name: 'None',
                },
            ]
        }, {
            type: 'input',
            name: 'commandDependency',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a command.');
                }
                return false;
            }
        }, {
            type: 'input',
            name: 'commandTests',
            message: 'What command should be run to run tests?',
            default: 'npm test',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a command.');
                }
                return false;
            }
        }, {
            type: 'input',
            name: 'repoInfo',
            message: 'What does the user need to know about using the repo?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a message to the user.');
                }
                return false;
            }
        }, {
            type: 'input',
            name: 'contributingInfo',
            message: 'What does the user need to know about contributing to the repo?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for the user.');
                }
                return false;
            }
        },

    ])
};

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// function to initialize program
function init() {
    questions()
        .then(answers => {
            writeToFile('Develop/README.md', generateMarkdown({
                ...answers
            }));
        })
}

init();