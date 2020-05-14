const { promisfy } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile} = require ('fs')

//bring over api code
const api = require ('./testApi2.js')


// array of information looking for
const questions = ['Project Title:', 'Description:', 'Table of Contents:', 'Installation:', 'Usage:', 'License:', 'Contributing:', 'Tests:', 'Questions:']

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

//prompting user for answer to questions, using inquirer.prompt
prompt(answers)
  //log the data
  .then(response => {
    api()
    .then(data => {
      generateMarkdown(response, data)
    })
    // console.log(data)
  })
  .catch(err => console.log(err))

// let generateMarkdown = require ('./generateMarkdown')

// function generateMarkdown({ data }) {
//   return `
// # **${data.title}**

// ## ${data.description}
// ## ${data.tbc}
// ## ${data.contributing}
// ## ${data.test}
// ## ${data.question}

// ![profilepic](https://avatars1.githubusercontent.com/u/62491401?v=4${userProfile[avatar_url]})
// `
// }

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
