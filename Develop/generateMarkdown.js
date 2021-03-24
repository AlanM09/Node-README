// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

![License badge](https://img.shields.io/badge/license-${data.licenses}-green.svg)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description 
${data.projectDescription}

## License
The license/licenses used with this project are ${data.licenses}.

## Installation
The command that should be run to install dependencies is ${data.commandDependency}.

## Usage 
${data.repoInfo}

## Credits
The creator of this project's email and GitHub is below. 
- ${data.emailAddress}
- ${data.gitHubUsername}

## Contributing
${data.contributingInfo}

## Tests
Use the ${data.commandTests} command to run a test.

## Questions
If you have any questions about this project, please contact the creator of the project. 
- ${data.emailAddress}
- ${data.gitHubUsername}
`;
}

module.exports = generateMarkdown;