function generateMarkdown(answers) {
  return `
# **${answers.title}**

## ${answers.description}
## ${answers.tbc}
## ${answers.contributting}
## ${answers.test}
## ${answers.question}
`
}

module.exports = generateMarkdown;
