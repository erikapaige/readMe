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
