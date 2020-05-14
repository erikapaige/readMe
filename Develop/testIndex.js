const { promisfy } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile} = require ('fs')


const writeFileSync = promisify (writeFile)

//bring over api code
let api = require ('./testApi2.js')


//array of information looking for
const questions = ['Project Title:', 'Description:', 'Table of Contents:', 'Installation:', 'Usage:', 'License:', 'Contributing:', 'Tests:', 'Questions:']

//creating empty array with answers from for questions
let answers = []
//using for loop to cycle through 'const questions' array
for (let i = 0; i < questions.length; i++) {
  answers.push({
    type: 'input',
    name: questions[i],
    message: `${questions[i]}`
  })
}

//prompting user for answer to questions, using inquirer.prompt
prompt(answers)
  //log the data
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
