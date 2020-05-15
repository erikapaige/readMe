const { promisify } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')
// const writeFilePromise = promisify(writeFile)
const writeFileSync = promisify(writeFile)
// npm package for AJAX
const axios = require('axios')

//bring over api code
const api = require('../../api')
//bring over markdown
const generateMarkdown = require('../../generateMarkdown')

// array of information looking for
const questions = ['Title:', 'Description:', 'Installation:', 'Usage:', 'License:', 'Contributing:', 'Tests:', 'Questions:', 'GitHub:']

// creating empty array with answers from for questions
let answers = []
//using for loop to cycle through 'const questions' array
for (let i = 0; i < questions.length; i++) {
  answers.push({
    type: 'input',
    name: questions[i],
    message: `${questions[i]}`
  })
}
// // creating empty array with answers from for questions
// let answers = []
// //using for loop to cycle through 'const questions' array
// for (let i = 0; i < questions.length; i++) {
//   answers.push({
//     type: 'input',
//     name: questions[i],
//     message: `${questions[i]}`
//   })
// }

//prompting user for answer to questions, using inquirer.prompt
prompt(answers)
  //log the data
  .then((response) => {
    // console.log(response)
    api.getUser(response.data)
    .then(data => {
      console.log(data)
      // writeFileSync("README.md", generateMarkdown(response, data))
      // .then(() => {  
      // })
    })
      .catch(err => console.log(err))
  })



