//npm 'inquirer' package allows for use of prompts
const { prompt } = require('inquirer')
//npm 'axios' package
const axios = require('axios')


//prompt user for username
prompt([
  {
    type:'input',
    name:'userProfile',
    message: 'GitHub Username:'
  }
])
  .then(data => {
    console.log(data)
    //loop over different properties of an object to get to key
    for(const key in data) {
        //return the value of data at the key (userProfile)
        console.log(data[key])
        //using key data, write axios request for user profile from GitHub
        axios.get(`https://api.github.com/users/${data[key]}`)
          .then(data => {
            console.log(data)
          })
          .catch(err => console.log(err))
    }
  })
  .catch(err => console.log(err))

//reqeust to get data infor from github
// axios.get(`https://api.github.com/users/:username`)
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))