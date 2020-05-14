const { promisfy } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')

//establishing values for promisify
const writeFilePromise = promisify (writeFile)
const appendFilePromise = promisify (appendFile)


//function writeToFile(fileName, data) {
// an array of objects with prompts for user information about the project
prompt([
  {
    type: 'input',
    name: 'username',
    message: 'GitHub username:'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Project Title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of the project:'
  },
  {
    type: 'list',
    name: 'tbc',
    message: 'Table of Contents:'
    choices: [
      new seperator (),
      {
        name: 'Installation'
      },
      {
        name: 'Usage'
      },
      {
        name: 'Credits'
      },
      {
        name: 'License'
      },
    ]
  },
  {
    type: 'list',
    name: 'contributting',
    message: 'List of contributors:'
    choices: [
      new seperator(),
      {
        name: 'Collaborators, list their GitHub profiles:'
      },
      {
        name: 'Third-party assets, list the creators with links:'
      },
      {
        name: 'Tutorials, list the links:'
      },
    ]
  },
  {
    type: 'input',
    name: 'test',
    message: 'Write the tests for the application, include examples of how to run them:'
  },
  {
    type: 'input',
    name: 'question',
    message: 'List any remaining questions or comments:'
  }
])
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
// }

// function init() {

// }

// init();