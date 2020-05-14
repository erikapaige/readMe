//bring in npm 'inquirer' package, allows for use of prompt
const { prompt } = require('inquirer')
//bring in file system
const { writeFile, appendFile } = require('fs')
const { promisfy } = require('util')

const writeFileSync = promisify(writeFile)

//bring over api code
let api = require('./testApi2.js')
console.log(api)