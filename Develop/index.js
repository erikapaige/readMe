//npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')

//array of information looking for
const questions = ['Project Title:', 'Description:', 'Table of Contents:', 'Installation:', 'Usage:', 'License:', 'Contributing:', 'Tests:', 'Questions:']

//creating empty array for objects from for loop
let answers = []
//using for loop to cycle through 'const questions' array
for (let i = 0; i < questions.length; i++) {
  answers.push({
    type: 'input',
    name: questions[i],
    message: `${questions[i]}`
  })
}
//prompting user for answer to questions
prompt(answers)
  //log the data
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

// const questions = [
  
// ]

// inquirer.prompt

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
