//psuedocoding
//1 add constants (like fs, axios and util)
//2 upon command - node index.js - will prompt user to fill out info
//3 prompted for github username
    //3a add require inquirer for prompt command
    //3b add Axios from npm
    //3c write propmt with object key asking for username
    //3d write axios request to save username and goto API
    //3e write 2nd axios request to get image
//4 once step 3 is complete user prompted with questions
  //install npm inqurier to make 'prompt' work
    //4a create a prompt array
    //4b each question is an object
        // {
        //     type: 'input',
        //     name: 'address',
        //     message: 'What is your address?'
        //   },
    //4c make sure to console.log data
        //   .then(data => {
        //     console.log(data)
        //   })
    //4d add catch err
        //   .catch(err => console.log(err))
    //4e using info from directions write an array of questions
   
//5 going to append file, make sure it is a .md (for readme)

how to re-structure from tutor
// let data = {}
// /// inq name
// //    then 
// let githubdata = API.getuser(anwswer.name)

            // inq for the rest of the questions   responses


                    /// axios for theapidata from github with the data.username
                    /// githubInfo

                        ///  data={...githubInfo, ...responses}

                          //// you call your generate (data)
                                  // you call write file (filename, generateMarkdown(myinfoalltogether))