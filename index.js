const inquirer = require('inquirer');
const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the name of your project?"
    },
    {
      type: 'input',
      name: 'description',
      message: "Please provide a brief description of your project:"
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your GitHub username?"
    }
  ];
  inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);
  });
  const inquirer = require('inquirer');
  const fs = require('fs');
  
  const question = [
    {
      type: 'input',
      name: 'name',
      message: "What is the name of your project?"
    },
    {
      type: 'input',
      name: 'description',
      message: "Please provide a brief description of your project:"
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your GitHub username?"
    }
  ];
  
  inquirer
    .prompt(questions)
    .then(answers => {
      const readmeTemplate = `
  # ${answers.name}
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
  ## Installation
  
  To install this project, run the following command:
  
  \`\`\`
  npm install
  \`\`\`
  
  ## Usage
  
  To use this project, run the following command:
  
  \`\`\`
  npm start
  \`\`\`
  
  ## Contributing
  
  If you would like to contribute to this project, please follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.
  
  ## License
  
  This project is licensed under the ISC License.
  
  ---
  
  © ${new Date().getFullYear()} ${answers.github}
  `;
  
      fs.writeFile('README.md', readmeTemplate, err => {
        if (err) throw err;
        console.log('README.md file created successfully!');
      });
    });
  
  