const { promisfy } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')
//npm 'axios' package
const axios = require('axios')
//establishing values for promisify
// const appendFileSync = promisify (writeFile)
// const writeFileSync  = promisify (appendFile)


//function writeToFile(fileName, data) {
//an array of objects with prompts for user information about the project
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
    message: 'Table of Contents:',
    choices: [
      {
        name: 'Installation',
      },
      {
        name: 'Usage',
      },
      {
        name: 'Credits',
      },
      {
        name: 'License',
      },
      {
        name: 'None where used',
      }
    ]
  },
  {
    type: 'list',
    name: 'contributting',
    message: 'List of contributors:',
    choices: [
      {
        name: 'Collaborators, list their GitHub profiles:',
      },
      {
        name: 'Third-party assets, list the creators with links:',
      },
      {
        name: 'Tutorials, list the links:',
      },
      {
        name: 'None where used',
      }
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
//take data
  .then(answers => {
    //making an object to put the user's answers
    console.log(answers)
    //use axios to get username from GitHub
    axios.get(`https://api.github.com/users/${answers.username}`)
    //using object destructuring using {} around data
    .then (({data}) => {
      console.log(answers, data)
    })
    //catch error for object destructured {data}
    .catch(err => console.log(err))
  })
  //catch error from original .then statment
  .catch(err => console.log(err))

let api = ('./api.js')
let markdown = ('./generateMarkdown.js')

function writeToFile ('readme.md', data, err =>
  if (err) {
    console.log(err)
  }
  .then
  )