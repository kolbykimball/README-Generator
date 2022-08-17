// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Function call to initialize app



const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title for your project.',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Provide a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter the installation instructions for your project.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter the usage information for your project.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter the contribution information for your project.',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'How is this project tested?',
            name: 'testing'
        },
        {
            type: 'list',
            message: 'Choose a license for your project.',
            name: 'licensing',
            choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution']
        },
        {
            type: 'input',
            message: 'Enter your email address.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter your github username.',
            name: 'github'
        },
    ]).then(data => {
        console.log(data);
        fs.writeFile('readme.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    });

    function init() {}
    init();