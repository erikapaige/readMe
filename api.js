//npm 'inquirer' package allows for use of prompts
const { prompt } = require('inquirer')
//npm 'axios' package
const axios = require('axios')


//prompt user for username
const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)
  }
}
      
//export function to testIndex2
module.exports = api
