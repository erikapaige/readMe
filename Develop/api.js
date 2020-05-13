//bringing in 'axios'
const axios = require('axios')

//running specific axios request methos
axios.get('https://api.github.com/users/')
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

// const api = {
//   getUser(username) {

//   }
// };

// module.exports = api;
