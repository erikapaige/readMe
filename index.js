const { promisfy } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')

//bring over api code
const api = require('./api')
//bring over markdown
const generateMarkdown = require('./generateMarkdown')


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

//prompting user for answer to questions, using inquirer.prompt
prompt(answers)
  //log the data
  .then(response => {
    console.log(response)
    api.getUser(response.login).then(data => {
        writeFile("README.md", generateMarkdown({response, data}))
      })
  .catch(err => console.log(err))
  })

// writeToFile("README.md", generateMarkdown(response, data)

  

//   return `
// # ** ${ response.Title }**
//     ---
// ## ${ response.Description }
// ## ${ response.Installation }
// ## ${ response.Usage }
// ## ${ response.License }
// ## ${ response.Contributing }
// ## ${ response.Tests }
// ## ${ response.Questions }
// ---
//   ${ data.name }

// ![profilepic](https://avatars1.githubusercontent.com/u/62491401?v=4${userProfile[avatar_url]})
// `
// }

