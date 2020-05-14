//npm 'inquirer' package allows for use of prompts
const { prompt } = require('inquirer')
//npm 'axios' package
const axios = require('axios')

//creating variables to call specific data in api key
// let userEmail = email () => {
//   axios.get(`https://api.github.com/users/${userProfile[data.email]}`)
//     .then(data => {
//       console.log
//     })
//     .catch(err => console.log(err))
// }

//prompt user for username
// let user = require ('prompt') 
//   prompt.start ()
//   prompt.get
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
            .then(({data}) => {
              //from axios request pull avatar_url
              console.log(data.avatar_url)
              //from the axios request pull user's email
              console.log(data.email)
            })
            .catch(err => console.log(err))
            }
      })
      .catch(err => console.log(err))


// module.exports = api
