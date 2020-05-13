//adding npm 'inquirer' package, allows for prompt
const { prompt } = require('inquirer')

//create an array of objects with prompts for user
prompt([
  {
    type: 'input',
    name: 'question1',
    message: 'Project Title:'
  },
  {
    type: 'input',
    name: 'question2',
    message: 'Description:'
  },
  {
    type: 'input',
    name: 'question3',
    message: 'Table of Contents:'
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
    name: 'question6',
    message: 'License:'
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

// const questions = [

// ];

// inquirer.prompt

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
