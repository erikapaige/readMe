const { promisfy } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')


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
    type: 'input',
    name: 'tbc',
    message: 'Table of Contents:'
    choices: [
      new seperator (,)
      {
        name: 'Installation'
      },
      {
        name: 'Usage'
      },
      {
  name: 'Usage'
      },
    ]
  },
  {
    type: 'input',
    name: 'question4',
    message: 'Installation:'
  },
  {
    type: 'input',
    name: 'question5',
    message: 'Usage:'
  },
  {
    type: 'input',
    name: 'license',
    message: 'List any licenses, if any, used:'
    choices: [
      new seperator (,)
      {

      },
      {

      },
      {

      },
    ]
  },
  {
    type: 'input',
    name: 'question7',
    message: 'Contributing:'
  },
  {
    type: 'input',
    name: 'question8',
    message: 'Tests:'
  },
  {
    type: 'input',
    name: 'question9',
    message: 'Questions:'
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