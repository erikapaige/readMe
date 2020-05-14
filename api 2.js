//npm 'axios' package
const axios = require('axios')

const api = {
  getUser(username){
    //writing axios request for userprofile from GitHub
    return axios.get(`https://api.github.com/users/${username}`)
  }
}
module.exports = api