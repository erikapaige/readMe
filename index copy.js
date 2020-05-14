const { promisify } = require('util')
//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')
//npm 'axios' package
const axios = require('axios')
//establishing values for promisify
const appendFileSync = promisify (writeFile)

//creating variables to be called on to generate the ReadMe
const userProfile =''

//prompt asking user for GitHub username
prompt([
  {
    type: 'input',
    name: 'userProfile',
    message: 'GitHub Username:'
  }
])
  .then(userProfile => {
    console.log(userProfile)
    //loop over different properties of an object to get to userProfile (key)
    for (const name in userProfile) {
      //return the value of data at the userProfile (key)
      console.log(name[userProfile])
      //using key data, write axios request for user profile from GitHub
      axios.get(`https://api.github.com/users/${userProfile[name]}`)
        //using {} around data to deconstruct the object
        .then(({ data }) => {
          //from axios request pull avatar_url
          console.log(data.avatar_url)
          //from the axios request pull user's email
          console.log(data.email)
        })
        .catch(err => console.log(err))
    }
  })
  .catch(err => console.log(err))

// //an array of objects with prompts for user information about the project
prompt([
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


//creating and formatting the readme file
function generateMarkdown({ data }) {
  return `
# **${data.title}**

## ${data.description}
## ${data.tbc}
## ${data.contributting}
## ${data.test}
## ${data.question}

![profilepic](https://avatars1.githubusercontent.com/u/62491401?v=4${userProfile[avatar_url]})
`
}

