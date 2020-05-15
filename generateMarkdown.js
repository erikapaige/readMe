

function generateMarkdown(response, data) {
  return `
# **${response.Title}**
---
Please reference the file 'READMEnotes.md' for additional notes on this project. 
---
## ${response.Description}
## ${response.Installation}
## ${response.Usage}
## ${response.License}
## ${response.Contributing}
## ${response.Tests}
## ${response.Questions}
---
###### ${data.login}
![profilepic](https://api.github.com/users/${data.avatar_url})
`
}

module.exports = generateMarkdown;

