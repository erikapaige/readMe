//npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')

//array of information looking for
const questions = ['Project Title:', 'Description:', 'Table of Contents:', 'Installation:', 'Usage:', 'License:', 'Contributing:', 'Tests:', 'Questions:']

//creating empty array for objects from for loop
let answers=[]
//using for loop to cycle through 'const questions' array
for (let i=0; i<questions.length; i++){
  answers.push({
    type: 'input',
    name: questions[i],
    message: `${questions[i]}`
  })
}
//prompting user for answer to questions
prompt(answers)
  //log the data
  .then(data=>{
    console.log(data)
  })
  .catch(err => console.log(err))

//an array of objects with prompts for user
// prompt([
//   {
//     type: 'input',
//     name: 'question1',
//     message: 'Project Title:'
//   },
//   {
//     type: 'input',
//     name: 'question2',
//     message: 'Description:'
//   },
//   {
//     type: 'input',
//     name: 'question3',
//     message: 'Table of Contents:'
//   },
//   {
//     type: 'input',
//     name: 'question4',
//     message: 'Installation:'
//   },
//   {
//     type: 'input',
//     name: 'question5',
//     message: 'Usage:'
//   },
//   {
//     type: 'input',
//     name: 'question6',
//     message: 'License:'
//   },
//   {
//     type: 'input',
//     name: 'question7',
//     message: 'Contributing:'
//   },
//   {
//     type: 'input',
//     name: 'question8',
//     message: 'Tests:'
//   },
//   {
//     type: 'input',
//     name: 'question9',
//     message: 'Questions:'
//   }
// ])
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))


// inquirer.prompt

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
