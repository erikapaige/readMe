//npm 'axios' package
const axios = require('axios')

const api = {
  //calling GitHub Api for user's username
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)  
  }
}