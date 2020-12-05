const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const path = require('path');

// array of questions for user
const questions = [
    
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Write a description of your project.',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions for your project?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the usage information of your project?',
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'What are the contribution guidelines?',
        },
        {
          type: 'input',
          name: 'test',
          message: 'What are the test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for my application from a list of options.',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD', 'None'],
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          },
        //   {
        //     type: 'list',
        //     name: 'contents',
        //     message: 'Choose a section.',
        //     choices: ['description', 'installation', 'usage', 'contribution', 'test', 'license'],
        //   },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answers)=> {
    writeToFile("README.md", generateMarkdown({...answers}));
})
}

// function call to initialize program
init();
